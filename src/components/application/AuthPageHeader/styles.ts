import { Select } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 20px;
  min-height: 85px;
  width: 100%;
`;

export const ButtonsContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }: ThemeProps) => theme.spacing[2]};
`;

export const SelectInput = styled(Select)<ThemeProps>`
  &.MuiInputBase-root {
    ${({ theme }: ThemeProps) => theme.typography.caption1};
    width: 100%;

    color: ${({ theme }: ThemeProps) => theme.colors.black[80]};

    &:before {
      border: none !important;
    }

    &:after {
      border: none !important;
    }

    &:hover {
      background: transparent;
    }
  }
  .MuiSelect-select {
    padding: 0 !important;
    &:focus {
      background: transparent;
    }
  }
`;
