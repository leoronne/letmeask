import { memo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import EndRoomModal from '../EndRoomModal';
import ShareRoomModal from '../ShareRoomModal';

import * as Icons from '../../ui/Icons';
import { DropdownMenu, ListItemIcon, MenuItem } from '../../ui';

import { User } from '../../../hooks/useAuth';
import { useLanguage } from '../../../hooks';

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
  const { translate, language, changeLanguage } = useLanguage();

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
              <span>{translate('share-room')}</span>
            </MenuItem>
            <MenuItem onClick={() => setModalEndRoomOpen(true)}>
              <ListItemIcon>
                <Icons.CloseAllIcon width={20} height={20} fill={colors.danger.base} />
              </ListItemIcon>
              <span>{translate('end-room')}</span>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                {language === 'pt' ? (
                  <Icons.BrazilIcon width={18} height={18} fill={colors.danger.base} />
                ) : (
                  <Icons.USAIcon width={18} height={18} fill={colors.danger.base} />
                )}
              </ListItemIcon>

              <Styles.SelectInput value={language} onChange={e => changeLanguage(String(e.target.value))}>
                <MenuItem value="en">
                  <span>English (United States)</span>
                </MenuItem>
                <MenuItem className="select-item-with-margin" value="pt">
                  <span>Português (Brasil)</span>
                </MenuItem>
              </Styles.SelectInput>
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
