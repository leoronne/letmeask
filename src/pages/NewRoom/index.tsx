import { FormEvent, useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAuth, useLanguage } from '../../hooks';

import { database } from '../../services/firebase';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Form, Input, Link, LoaderSpinner } from '../../components/ui';

import * as Styles from './styles';

function NewRoom() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuth();
  const { translate } = useLanguage();

  const [room, setRoom] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateRoom = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (!room.trim()) {
        setRoom('');
        return;
      }

      const roomRef = database.ref('rooms');

      const firebaseRoom = await roomRef.push({
        title: room.trim(),
        authorId: user?.id,
      });

      enqueueSnackbar(translate('room-created'), { variant: 'success' });

      history.push(`/rooms/${firebaseRoom.key}`);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styles.Main>
      <Styles.Content>
        <RouterLink to="/">
          <Icons.LogoIcon width={150} height={71} />
        </RouterLink>
        <Styles.Title>{translate('create-new-room')}</Styles.Title>
        <Form onSubmit={handleCreateRoom}>
          <Input
            name="room"
            type="text"
            label={translate('room-name')}
            aria-label={translate('room-name')}
            value={room}
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value);
            }}
            maxLength={150}
            required
          />
          <ButtonOutlined type="submit" aria-label={translate('create-room')} min_width="100%" disabled={loading}>
            {loading ? <LoaderSpinner size={20} /> : <Icons.CreateIcon />}
            <p>{translate('create-room')}</p>
          </ButtonOutlined>
        </Form>
        <Link to="/" margin_top={16} aria-label={translate('enter-existing-room')}>
          <Icons.LoginIcon width={16} height={16} />
          {translate('enter-existing-room')}
        </Link>
      </Styles.Content>
    </Styles.Main>
  );
}

export default NewRoom;
