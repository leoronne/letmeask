import styled from 'styled-components';

import { IconButton } from '@material-ui/core';

export const Button = styled(IconButton)<ThemeProps>`
  &.MuiButtonBase-root {
    width: ${({ theme }: ThemeProps) => theme.spacing[4]};
    height: ${({ theme }: ThemeProps) => theme.spacing[4]};
    padding: ${({ theme }: ThemeProps) => theme.spacing.small};
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }
`;
