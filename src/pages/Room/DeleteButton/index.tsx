import { useState } from 'react';
import { useSnackbar } from 'notistack';

import * as Icons from '../../../components/ui/Icons';
import {
  ButtonOutlined,
  IconButton,
  LoaderSpinner,
  Modal,
  ModalActions,
  ModalContent,
  ModalContentSubtitle,
  ModalContentTitle,
} from '../../../components/ui';

import { database } from '../../../services/firebase';

import { colors, borderRadius } from '../../../styles/theme';

interface DeleteButtonProps {
  roomId: string;
  questionId: string;
}

function DeleteButton({ roomId, questionId }: DeleteButtonProps) {
  const { enqueueSnackbar } = useSnackbar();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteQuestion = async () => {
    // eslint-disable-next-line no-alert
    try {
      setLoading(true);
      if (questionId.trim() === '') {
        return;
      }

      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();

      enqueueSnackbar('Pergunta excluída', { variant: 'success' });
      setModalOpen(false);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton
        aria-label="Excluir pergunta"
        border_radius={borderRadius.extraLarge}
        padding={6}
        width="32px"
        height={32}
        onClick={() => setModalOpen(true)}
        disabled={loading}
      >
        <Icons.DeleteIcon width={15} height={15} fill={colors.black[40]} />
      </IconButton>
      <Modal isOpen={modalOpen} setOpen={() => setModalOpen(!modalOpen)} maxWidth="xs">
        <>
          <ModalContent>
            <Icons.DeleteIcon fill={colors.danger.base} width={35} height={35} />
            <ModalContentTitle>Excluir pergunta</ModalContentTitle>
            <ModalContentSubtitle>Tem certeza que você deseja excluir esta pergunta?</ModalContentSubtitle>
          </ModalContent>
          <ModalActions>
            <ButtonOutlined
              type="button"
              color_scheme={{ text: colors.white.base, accent: colors.black[40] }}
              disabled={loading}
              onClick={() => setModalOpen(false)}
              height={40}
            >
              <p>Cancelar</p>
            </ButtonOutlined>
            <ButtonOutlined
              type="button"
              color_scheme={{ text: colors.danger.text, accent: colors.danger.base }}
              disabled={loading}
              onClick={handleDeleteQuestion}
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

export default DeleteButton;
