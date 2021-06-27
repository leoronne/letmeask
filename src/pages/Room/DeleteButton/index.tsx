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
  Tooltip,
} from '../../../components/ui';

import { database } from '../../../services/firebase';

import { useLanguage } from '../../../hooks';

import { colors, borderRadius } from '../../../styles/theme';

interface DeleteButtonProps {
  roomId: string;
  questionId: string;
}

function DeleteButton({ roomId, questionId }: DeleteButtonProps) {
  const { enqueueSnackbar } = useSnackbar();

  const { translate } = useLanguage();

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

      enqueueSnackbar(translate('deleted-question'), { variant: 'success' });
      setModalOpen(false);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Tooltip title={translate('delete-question')} placement="bottom" arrow>
        <IconButton
          aria-label={translate('delete-question')}
          border_radius={borderRadius.extraLarge}
          padding={6}
          width="32px"
          height={32}
          onClick={() => setModalOpen(true)}
          disabled={loading}
        >
          <Icons.DeleteIcon width={15} height={15} fill={colors.black[40]} />
        </IconButton>
      </Tooltip>
      <Modal isOpen={modalOpen} setOpen={() => setModalOpen(!modalOpen)} maxWidth="xs">
        <>
          <ModalContent>
            <Icons.DeleteIcon fill={colors.danger.base} width={35} height={35} />
            <ModalContentTitle>{translate('delete-question')}a</ModalContentTitle>
            <ModalContentSubtitle>{translate('delete-question-text')}</ModalContentSubtitle>
          </ModalContent>
          <ModalActions>
            <ButtonOutlined
              type="button"
              aria-label={translate('cancel')}
              color_scheme={{ text: colors.white.base, accent: colors.black[40] }}
              disabled={loading}
              onClick={() => setModalOpen(false)}
              height={40}
            >
              <p>{translate('cancel')}</p>
            </ButtonOutlined>
            <ButtonOutlined
              type="button"
              aria-label={translate('confirm')}
              color_scheme={{ text: colors.danger.text, accent: colors.danger.base }}
              disabled={loading}
              onClick={handleDeleteQuestion}
              height={40}
              min_width="100px"
            >
              {loading ? <LoaderSpinner size={15} /> : <p>{translate('confirm')}</p>}
            </ButtonOutlined>
          </ModalActions>
        </>
      </Modal>
    </>
  );
}

export default DeleteButton;
