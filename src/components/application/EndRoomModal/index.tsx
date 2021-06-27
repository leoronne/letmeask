import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

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

interface EndRoomModalProps {
  id: string;
  admin: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function EndRoomModal({ id, admin, open, setOpen }: EndRoomModalProps) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

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

      setTimeout(() => history.push('/'), 500);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setOpen(false);
    }
  };

  return (
    <Modal isOpen={open} setOpen={handleClose} maxWidth="xs">
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
            onClick={handleClose}
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
  );
}

export default EndRoomModal;
