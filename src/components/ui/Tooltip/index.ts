import styled from 'styled-components';
import { Tooltip as TooltipMUI } from '@material-ui/core';

export const Tooltip = styled(TooltipMUI)<ThemeProps>`
  font-size: '13px';
  padding: '10px';
  opacity: 1;
`;
