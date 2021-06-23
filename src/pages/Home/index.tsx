import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Separator, Input } from '../../components/ui';

import { useAuth } from '../../hooks';

import * as Styles from './styles';

function Home() {
  const history = useHistory();

  const [room, setRoom] = useState<string>('');
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  return (
    <Styles.Main>
      <Styles.Content>
        <Icons.LogoIcon width={150} height={71} marginBottom={32} />
        <ButtonOutlined
          type="button"
          colorScheme={{ accent: '#EA4335', text: '#fff' }}
          minWidth="100%"
          onClick={() => handleCreateRoom()}
        >
          <Icons.GoogleIcon width={25} height={25} />
          <p>Crie sua sala com o Google</p>
        </ButtonOutlined>
        <Separator>ou entre em uma sala</Separator>
        <Styles.Form>
          <Input
            type="text"
            label="Código da sala"
            value={room}
            name="room"
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value);
            }}
          />
          <ButtonOutlined type="submit" minWidth="100%">
            <Icons.LoginIcon width={25} height={25} />
            <p>Entrar na sala</p>
          </ButtonOutlined>
        </Styles.Form>
      </Styles.Content>
    </Styles.Main>
  );
}

export default Home;
