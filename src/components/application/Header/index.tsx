import { memo, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import RoomCode from '../RoomCode';
import * as Icons from '../../ui/Icons';
import {
  ButtonOutlined,
  LoaderSpinner,
  Modal,
  ModalActions,
  ModalContent,
  ModalContentSubtitle,
  ModalContentTitle,
} from '../../ui';

import { database } from '../../../services/firebase';

import { colors } from '../../../styles/theme';
import * as Styles from './styles';

interface Props {
  id: string;
  admin?: boolean;
}

function Header({ id, admin = false }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleEndRoom = async () => {
    try {
      setLoading(true);
      if (id.trim() === '') {
        return;
      }

      if (!admin) {
        throw new Error('You must be the owner of the room to do this');
      }

      await database.ref(`rooms/${id}`).update({
        endedAt: Date.now(),
      });
      enqueueSnackbar('Sala encerrada', { variant: 'success' });

      history.push('/');
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <RouterLink to="/">
            <Icons.LogoIcon width={150} height={45} />
          </RouterLink>
          <Styles.ButtonsContainer>
            <RoomCode code={id} />
            {admin && (
              <ButtonOutlined type="button" disabled={loading} onClick={() => setModalOpen(true)} height={40}>
                {loading ? <LoaderSpinner size={15} /> : <Icons.CloseAllIcon width={20} height={20} />}
                <p>Encerrar sala</p>
              </ButtonOutlined>
            )}
          </Styles.ButtonsContainer>
        </Styles.Content>
      </Styles.Container>

      <Modal isOpen={modalOpen} setOpen={() => setModalOpen(!modalOpen)} maxWidth="xs">
        <>
          <ModalContent>
            <Icons.CloseAllIcon fill={colors.danger.base} width={35} height={35} />
            <ModalContentTitle>Encerrar sala</ModalContentTitle>
            <ModalContentSubtitle>Tem certeza que você deseja encerrar esta sala?</ModalContentSubtitle>
          </ModalContent>
          <ModalActions>
            <ButtonOutlined
              type="button"
              color_scheme={{ text: colors.white.base, accent: colors.black[40] }}
              disabled={loading}
              onClick={() => setModalOpen(false)}
              height={40}
              min_width="100px"
            >
              <p>Cancelar</p>
            </ButtonOutlined>
            <ButtonOutlined
              type="button"
              color_scheme={{ text: colors.danger.text, accent: colors.danger.base }}
              disabled={loading}
              onClick={handleEndRoom}
              height={40}
              min_width="100px"
            >
              {loading ? <LoaderSpinner size={15} /> : <p>Confirmar</p>}
            </ButtonOutlined>
          </ModalActions>
        </>
      </Modal>
    </>
  );
}

export default memo(Header);
