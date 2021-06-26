import { FormEvent, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Separator, Input, Form, LoaderSpinner } from '../../components/ui';

import { useAuth } from '../../hooks';

import * as Styles from './styles';
import { database } from '../../services/firebase';
import { UserAvatar } from '../../components/application';
import { theme } from '../../styles/theme';

function Home() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { user, signInWithGoogle } = useAuth();

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

      if (!roomRef.exists()) throw new Error('Não encontramos nenhuma sala com este código');

      if (roomRef.val()?.endedAt) throw new Error('A sala já foi encerrada');

      history.push(`/rooms/${room}`);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoadingJoinRoom(false);
    }
  };

  const ButtonLogo = () => {
    if (!user) return <Icons.GoogleIcon />;
    return <UserAvatar src={user.avatar} alt={user.name} margin_right={theme.spacing[2]} />;
  };

  return (
    <Styles.Main>
      <Styles.Content>
        <RouterLink to="/">
          <Icons.LogoIcon width={150} height={71} margin_bottom={32} />
        </RouterLink>
        <ButtonOutlined
          type="button"
          color_scheme={{ accent: '#EA4335', text: '#fff' }}
          min_width="100%"
          onClick={() => handleCreateRoom()}
          disabled={loadingCreateRoom}
        >
          {loadingCreateRoom ? <LoaderSpinner size={20} /> : <ButtonLogo />}
          <p>Crie sua sala com o Google</p>
        </ButtonOutlined>
        <Separator>ou entre em uma sala</Separator>
        <Form onSubmit={handleJoinRoom}>
          <Input
            name="room"
            type="text"
            label="Código da sala"
            value={room}
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value.trim());
            }}
            required
          />
          <ButtonOutlined type="submit" min_width="100%" disabled={loadingJoinRoom}>
            {loadingJoinRoom ? <LoaderSpinner size={20} /> : <Icons.LoginIcon />}
            <p>Entrar na sala</p>
          </ButtonOutlined>
        </Form>
      </Styles.Content>
    </Styles.Main>
  );
}

export default Home;
