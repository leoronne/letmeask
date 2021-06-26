import { useSnackbar, SnackbarKey } from 'notistack';

import { CloseIcon } from '../../ui/Icons';

import * as Styles from './styles';

interface Props {
  key?: SnackbarKey | undefined;
}

export function CloseButton({ key }: Props) {
  const { closeSnackbar } = useSnackbar();
  return (
    <Styles.Button onClick={() => closeSnackbar(key)} aria-label="Fechar notificação">
      <CloseIcon width={15} height={15} fill="#fff" />
    </Styles.Button>
  );
}
