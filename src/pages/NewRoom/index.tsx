import { useState } from 'react';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Input, Link } from '../../components/ui';

import * as Styles from './styles';

function NewRoom() {
  const [room, setRoom] = useState<string>('');

  return (
    <Styles.Main>
      <Styles.Content>
        <Icons.LogoIcon width={150} height={71} />
        <Styles.Title>Crie uma nova sala</Styles.Title>
        <Styles.Form>
          <Input
            type="text"
            label="Nome da sala"
            value={room}
            name="room"
            variant="outlined"
            onChange={e => {
              setRoom(e.target.value);
            }}
          />
          <ButtonOutlined type="submit" min_width="100%">
            <Icons.CreateIcon width={25} height={25} />
            <p>Criar sala</p>
          </ButtonOutlined>
        </Styles.Form>
        <Link to="/" margin_top={16}>
          <Icons.LoginIcon width={16} height={16} />
          Entrar em uma sala já existente
        </Link>
      </Styles.Content>
    </Styles.Main>
  );
}

export default NewRoom;
