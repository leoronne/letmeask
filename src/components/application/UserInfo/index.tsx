import { User } from '../../../hooks/useAuth';
import UserAvatar from '../UserAvatar';

import * as Styles from './styles';

interface Props {
  user: User | { name: string; avatar: string };
  font_size?: number;
  color?: string;
}

function UserInfo({ user, font_size, color }: Props) {
  return (
    <Styles.Container>
      <UserAvatar src={user.avatar} alt={user.name} />
      <Styles.UserName font_size={font_size} color={color}>
        {user.name}
      </Styles.UserName>
    </Styles.Container>
  );
}

export default UserInfo;
