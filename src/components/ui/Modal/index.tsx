import { ReactNode } from 'react';

import * as Icons from '../Icons';
import { IconButton } from '../IconButton';

import { colors } from '../../../styles/theme';
import * as Styles from './styles';

interface ModalProps {
  title?: string;
  isOpen: boolean;
  children?: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maxWidth?: 'md' | 'xs' | 'sm' | 'lg' | 'xl';
}

function Modal({ children, maxWidth = 'sm', isOpen, setOpen, title }: ModalProps) {
  return (
    <Styles.Modal open={isOpen} maxWidth={maxWidth} fullWidth>
      <Styles.Header disableTypography>
        <Styles.Title>{title}</Styles.Title>

        <IconButton aria-label="Marcar como gostei" padding={6} width="32px" height={32} onClick={() => setOpen(false)}>
          <Icons.CloseIcon width={25} height={25} fill={colors.black[40]} />
        </IconButton>
      </Styles.Header>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Modal>
  );
}

export default Modal;
