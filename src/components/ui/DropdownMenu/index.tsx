import { ReactNode, useState } from 'react';
import { Fade } from '@material-ui/core';

import * as Icons from '../Icons';
import { IconButton } from '../IconButton';

import * as Styles from './styles';
import { colors } from '../../../styles/theme';

interface DropdownMenuProps {
  children?: ReactNode;
}

function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(null);

  const handleClick = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => setOpen(null);

  return (
    <Styles.Container>
      <IconButton aria-label="Menu" padding={6} width="32px" height={32} onClick={handleClick}>
        <Icons.SettingsIcon fill={open ? colors.primary.base : colors.black[60]} />
      </IconButton>
      {/* {children} */}
      <Styles.MenuContainer
        id="fade-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {children}
      </Styles.MenuContainer>
    </Styles.Container>
  );
}

export default DropdownMenu;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { MenuItem, Fade, ListItemIcon } from '@material-ui/core';
// import { MdEmail, MdPowerSettingsNew, MdSettings, MdKeyboardArrowDown } from 'react-icons/md';
// import { FaUserCircle } from 'react-icons/fa';

// import { useAuth } from '../../hooks';

// import { MenuContainer, useStyles } from '../../styles/MaterialUI';

// import { User } from '../../@types';

// import { Container } from './styles';

// interface Props {
//   user: User | undefined;
// }

// const DropdownHeader: React.FC<Props> = ({ user }) => {
//   const { signOut } = useAuth();
//   const { t } = useTranslation();

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any

//   const handleClose = () => setOpen(null);
//   const classes = useStyles();
//   return (
//     <Container>
//       <MdKeyboardArrowDown className={`icon-button${open ? ' icon-button-color' : ''}`} onClick={handleClick} />
//       <MenuContainer className={classes.dropdownHeader} id="fade-menu" anchorEl={open} keepMounted open={Boolean(open)} onClose={handleClose} TransitionComponent={Fade}>
//         <MenuItem disabled>
//           <ListItemIcon>
//             <FaUserCircle color="#6c757d" />
//           </ListItemIcon>
//           <span className="titleDropdown">{user ? user.name.replace(/ .*/, '') : ''}</span>
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemIcon>
//             <MdEmail color="#6c757d" />
//           </ListItemIcon>
//           <span className="titleDropdown">{user ? user.email : ''}</span>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <MdSettings color="#175D8D" />
//           </ListItemIcon>
//           <Link to="/settings" className="titleDropdown">
//             {t('settings')}
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleSignOut}>
//           <ListItemIcon>
//             <MdPowerSettingsNew color="#175D8D" />
//           </ListItemIcon>
//           <span className="titleDropdown">{t('logout')}</span>
//         </MenuItem>
//       </MenuContainer>
//     </Container>
//   );
// };

// export default DropdownHeader;
