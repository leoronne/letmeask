import { FormEvent, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Separator, Input, Form, LoaderSpinner } from '../../components/ui';
import { UserAvatar } from '../../components/application';

import { database } from '../../services/firebase';

import { useAuth, useLanguage } from '../../hooks';

import { spacing } from '../../styles/theme';
import * as Styles from './styles';

function Home() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const { user, signInWithGoogle } = useAuth();
  const { translate } = useLanguage();

  const [room, setRoom] = useState<string>('');
  const [loadingCreateRoom, setLoadingCreateRoom] = useState<boolean>(false);
  const [loadingJoinRoom, setLoadingJoinRoom] = useState<boolean>(false);

  const handleCreateRoom = async () => {
    try {
      setLoadingCreateRoom(true);
      if (!user) {
        await signInWithGoogle();
      }

      history.push('/rooms/new');
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoadingCreateRoom(false);
    }
  };

  const handleJoinRoom = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoadingJoinRoom(true);

      if (!room) return;

      const roomRef = await database.ref(`rooms/${room}`).get();

      if (!roomRef.exists()) throw new Error(translate('no-room'));

      if (roomRef.val()?.endedAt) throw new Error(translate('room-has-ended'));

      history.push(`/rooms/${room}`);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoadingJoinRoom(false);
    }
  };

  const ButtonLogo = () => {
    if (!user) return <Icons.GoogleIcon />;
    return <UserAvatar src={user.avatar} alt={user.name} margin_right={spacing[2]} />;
  };

  return (
    <Styles.Main>
      <Styles.Content>
        <RouterLink to="/">
          <Icons.LogoIcon width={150} height={71} margin_bottom={32} />
        </RouterLink>
        <ButtonOutlined
          type="button"
          aria-label={translate('create-with-google')}
          color_scheme={{ accent: '#EA4335', text: '#fff' }}
          min_width="100%"
          onClick={() => handleCreateRoom()}
          disabled={loadingCreateRoom}
        >
          {loadingCreateRoom ? <LoaderSpinner size={20} /> : <ButtonLogo />}
          <p>{translate('create-with-google')}</p>
        </ButtonOutlined>
        <Separator>{translate('or-join-room')}</Separator>
        <Form onSubmit={handleJoinRoom}>
          <Input
            name="room"
            type="text"
            label={translate('room-code')}
            aria-label={translate('room-code')}
            value={room}
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value.trim());
            }}
            required
          />
          <ButtonOutlined
            type="submit"
            aria-label={translate('enter-room')}
            min_width="100%"
            disabled={loadingJoinRoom}
          >
            {loadingJoinRoom ? <LoaderSpinner size={20} /> : <Icons.LoginIcon />}
            <p>{translate('enter-room')}</p>
          </ButtonOutlined>
        </Form>
      </Styles.Content>
    </Styles.Main>
  );
}

export default Home;
