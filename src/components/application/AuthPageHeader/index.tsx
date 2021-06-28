import { memo } from 'react';

import * as Icons from '../../ui/Icons';
import { DropdownMenu, ListItemIcon, MenuItem } from '../../ui';

import { useLanguage, useAuth } from '../../../hooks';

import { colors } from '../../../styles/theme';
import * as Styles from './styles';

function AuthHeader() {
  const { user, logOut } = useAuth();
  const { language, translate, changeLanguage } = useLanguage();

  return (
    <>
      <Styles.Container>
        <DropdownMenu>
          <MenuItem>
            <ListItemIcon>
              {language === 'pt' ? (
                <Icons.BrazilIcon width={18} height={18} />
              ) : (
                <Icons.USAIcon width={18} height={18} />
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
          {user && (
            <MenuItem onClick={() => logOut()}>
              <ListItemIcon>
                <Icons.LogOutIcon width={20} height={20} fill={colors.primary.base} />
              </ListItemIcon>
              <span>{translate('log-out')}</span>
            </MenuItem>
          )}
        </DropdownMenu>
      </Styles.Container>
    </>
  );
}

export default memo(AuthHeader);
