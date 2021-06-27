import styled from 'styled-components';
import { Menu, MenuItem as MenuItemMUI, ListItemIcon as ListItemIconMUI } from '@material-ui/core';

export const Container = styled.div``;

interface MenuContainerProps extends ThemeProps {
  top?: number;
  min_width?: number;
}

export const MenuContainer = styled(Menu)<MenuContainerProps>`
  .MuiPaper-root {
    border-radius: ${({ theme }: MenuContainerProps) => theme.borderRadius.base};
    min-width: ${({ min_width }: MenuContainerProps) => min_width || 330}px;
    top: ${({ top, theme }: MenuContainerProps) => (top ? `${top}px` : theme.spacing[7])} !important;
    ul {
      padding: ${({ theme }: MenuContainerProps) => theme.spacing[2]};
      li + li {
        margin-top: ${({ theme }: MenuContainerProps) => theme.spacing[1]};
      }
    }
  }
`;

export const MenuItem = styled(MenuItemMUI)`
  &.MuiListItem-root {
    border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.small};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      max-width: 225px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      ${({ theme }: ThemeProps) => theme.typography.caption1};
      color: ${({ theme }: ThemeProps) => theme.colors.black[80]};
    }
  }
`;

export const ListItemIcon = styled(ListItemIconMUI)`
  margin-right: ${({ theme }: ThemeProps) => theme.spacing[2]};
  min-width: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
