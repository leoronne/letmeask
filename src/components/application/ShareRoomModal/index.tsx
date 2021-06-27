import { useState } from 'react';
import { useSnackbar } from 'notistack';

import ShareButton from './ShareButton';

import * as Icons from '../../ui/Icons';
import { Input, InputAdornment, Modal, ModalContent, Tooltip } from '../../ui';

import { useLanguage } from '../../../hooks';

import { animateCheck } from '../../../utils/animate-check';

import * as Styles from './styles';

interface ShareRoomModalProps {
  id: string;
  title: string | undefined;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShareRoomModal({ id, open, setOpen, title }: ShareRoomModalProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { translate } = useLanguage();

  const [loading, setLoading] = useState<boolean>(false);

  const copyRoomCodeToClipboard = () => {
    try {
      setLoading(true);
      navigator.clipboard.writeText(id);
      enqueueSnackbar(translate('copied-clipboard'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      animateCheck();
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setOpen(false);
    }
  };

  return (
    <Modal isOpen={open} setOpen={handleClose} title={translate('share')} maxWidth="xs">
      <>
        <ModalContent>
          <Styles.Container>
            <Styles.ShareOptionsContainer>
              <ShareButton slug="copy-link" id={id} />
              <ShareButton slug="facebook" id={id} />
              <ShareButton slug="whatsapp" id={id} />
              <ShareButton slug="twitter" id={id} />
              <ShareButton slug="email" id={id} />
            </Styles.ShareOptionsContainer>
            <Input
              name="room"
              type="text"
              label={translate('room-code')}
              value={id}
              height={40}
              variant="outlined"
              disabled
              InputProps={{
                endAdornment: (
                  <Tooltip title={translate('copy-room-code')} placement="bottom" arrow>
                    <InputAdornment
                      position="end"
                      onClick={copyRoomCodeToClipboard}
                      aria-label={translate('copy-room-code')}
                    >
                      <Icons.CopyIcon width={20} height={20} />
                    </InputAdornment>
                  </Tooltip>
                ),
              }}
            />
          </Styles.Container>
        </ModalContent>
      </>
    </Modal>
  );
}

export default ShareRoomModal;
