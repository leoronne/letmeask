import { useState } from 'react';
import { useSnackbar } from 'notistack';

import * as Icons from '../../ui/Icons';
import { AnimatedCheck, Tooltip } from '../../ui';

import { animateCheck } from '../../../utils/animate-check';

import * as Styles from './styles';

interface Props {
  code: string;
}

function RoomCode({ code }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState<boolean>(false);

  const copyRoomCodeToClipboard = () => {
    try {
      setLoading(true);
      navigator.clipboard.writeText(code);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      animateCheck();
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };

  return (
    <Tooltip title={`Copiar código: ${code}`} placement="bottom" arrow>
      <Styles.Button
        type="button"
        onClick={copyRoomCodeToClipboard}
        disabled={loading}
        aria-label="Copiar código da sala"
      >
        {!loading && <Icons.CopyIcon width={20} height={20} />}
        <AnimatedCheck isLoading={loading} />
        <p>{`Sala: ${code}`}</p>
      </Styles.Button>
    </Tooltip>
  );
}

export default RoomCode;
