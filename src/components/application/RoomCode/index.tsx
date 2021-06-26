import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import * as Icons from '../../ui/Icons';
import { ButtonOutlined, LoaderSpinner } from '../../ui';

import { theme } from '../../../styles/theme';

interface Props {
  code: string;
}

function RoomCode({ code }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyRoomCodeToClipboard = () => {
    try {
      setLoading(true);
      navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 3500);
  }, [copied]);

  const Icon = () => {
    if (!loading && !copied) return <Icons.CopyIcon width={20} height={20} />;
    if (loading) return <LoaderSpinner size={15} />;
    if (copied) return <Icons.CheckedIcon width={20} height={20} fill={theme.colors.primary.base} />;
    return <></>;
  };

  return (
    <ButtonOutlined type="button" onClick={copyRoomCodeToClipboard} disabled={loading} height={40}>
      <Icon />
      <p>{`Sala: ${code}`}</p>
    </ButtonOutlined>
  );
}

export default RoomCode;
