import { User } from '../../../hooks/useAuth';

import { Tooltip } from '../../ui';
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
      <Tooltip title={user.name} placement="right" arrow>
        <Styles.UserName font_size={font_size} color={color}>
          {user.name}
        </Styles.UserName>
      </Tooltip>
    </Styles.Container>
  );
}

export default UserInfo;
