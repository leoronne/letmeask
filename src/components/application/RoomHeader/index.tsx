import { memo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import EndRoomModal from '../EndRoomModal';
import ShareRoomModal from '../ShareRoomModal';

import * as Icons from '../../ui/Icons';
import { DropdownMenu, ListItemIcon, MenuItem } from '../../ui';

import { User } from '../../../hooks/useAuth';

import { colors } from '../../../styles/theme';
import * as Styles from './styles';
import UserAvatar from '../UserAvatar';

interface Props {
  id: string;
  admin?: boolean;
  user: User | undefined;
  roomTitle: string | undefined;
}

function RoomHeader({ id, admin = false, user, roomTitle }: Props) {
  const [modalEndRoomOpen, setModalEndRoomOpen] = useState<boolean>(false);
  const [modalShareRoomOpen, setModalShareRoomOpen] = useState<boolean>(false);

  return (
    <>
      <Styles.Container>
        <RouterLink to="/">
          <Icons.LogoIcon width={150} height={45} />
        </RouterLink>
        <Styles.ButtonsContainer>
          <DropdownMenu>
            {user && (
              <MenuItem disabled>
                <ListItemIcon>
                  <UserAvatar src={user?.avatar} alt={user?.name} width={20} height={20} />
                </ListItemIcon>
                <span>{user?.name}</span>
              </MenuItem>
            )}
            <MenuItem disabled>
              <ListItemIcon>
                <Icons.RoomIcon width={20} height={20} />
              </ListItemIcon>
              <span>{id}</span>
            </MenuItem>
            <MenuItem onClick={() => setModalShareRoomOpen(true)}>
              <ListItemIcon>
                <Icons.ShareIcon width={20} height={20} fill={colors.primary.base} />
              </ListItemIcon>
              <span>Compartilhar sala</span>
            </MenuItem>
            <MenuItem onClick={() => setModalEndRoomOpen(true)}>
              <ListItemIcon>
                <Icons.CloseAllIcon width={20} height={20} fill={colors.danger.base} />
              </ListItemIcon>
              <span>Encerrar sala</span>
            </MenuItem>
          </DropdownMenu>
        </Styles.ButtonsContainer>
      </Styles.Container>

      <EndRoomModal id={id} admin={admin} open={modalEndRoomOpen} setOpen={setModalEndRoomOpen} />
      <ShareRoomModal id={id} title={roomTitle} open={modalShareRoomOpen} setOpen={setModalShareRoomOpen} />
    </>
  );
}

export default memo(RoomHeader);
