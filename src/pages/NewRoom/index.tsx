import { FormEvent, useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAuth } from '../../hooks';

import { database } from '../../services/firebase';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Form, Input, Link, LoaderSpinner } from '../../components/ui';

import * as Styles from './styles';

function NewRoom() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

  const [room, setRoom] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateRoom = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (!room.trim()) return;

      const roomRef = database.ref('rooms');

      const firebaseRoom = await roomRef.push({
        title: room.trim(),
        authorId: user?.id,
      });

      enqueueSnackbar('Sala criada com sucesso', { variant: 'success' });

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
        <Styles.Title>Crie uma nova sala</Styles.Title>
        <Form onSubmit={handleCreateRoom}>
          <Input
            name="room"
            type="text"
            label="Nome da sala"
            value={room}
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value);
            }}
            maxLength={150}
            required
          />
          <ButtonOutlined type="submit" min_width="100%" disabled={loading}>
            {loading ? <LoaderSpinner size={20} /> : <Icons.CreateIcon />}
            <p>Criar sala</p>
          </ButtonOutlined>
        </Form>
        <Link to="/" margin_top={16}>
          <Icons.LoginIcon width={16} height={16} />
          Entrar em uma sala já existente
        </Link>
      </Styles.Content>
    </Styles.Main>
  );
}

export default NewRoom;
