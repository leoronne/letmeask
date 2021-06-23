import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

interface ButtonProps extends ThemeProps, ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  minWidth?: string;
  height?: number;
  colorScheme?: {
    accent: string;
    text: string;
  };
}

export const ButtonOutlined = styled(Button)<ButtonProps>`
  &.MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    color: ${({ colorScheme, theme }: ButtonProps) => (colorScheme ? colorScheme.accent : theme.colors.primary.base)};
    border: 2px solid
      ${({ colorScheme, theme }: ButtonProps) => (colorScheme ? colorScheme.accent : theme.colors.primary.base)};

    text-transform: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 4px 4px ${(props: ButtonProps) => props.theme.colors.black[12]};

    height: ${({ height }: ButtonProps) => height || 50}px;
    width: ${({ width }: ButtonProps) => (width ? `${width}px` : 'max-content')};
    min-width: ${({ minWidth }: ButtonProps) => minWidth || 'auto'};
    border-radius: ${({ theme }: ButtonProps) => theme.borderRadius.base};

    outline: none;

    transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};

    font-size: 16px;

    svg + p {
      margin-left: ${({ theme }: ButtonProps) => theme.spacing[2]};
    }

    span,
    svg,
    p {
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
    }

    &:hover {
      background: ${({ colorScheme, theme }: ButtonProps) =>
        colorScheme ? colorScheme.accent : theme.colors.primary.base};
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};

      p,
      svg {
        transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
        color: ${({ colorScheme, theme }: ButtonProps) => (colorScheme ? colorScheme.text : theme.colors.white.base)};
        fill: ${({ colorScheme, theme }: ButtonProps) => (colorScheme ? colorScheme.text : theme.colors.white.base)};
      }

      path {
        fill: ${({ colorScheme, theme }: ButtonProps) => (colorScheme ? colorScheme.text : theme.colors.white.base)};
      }
    }

    &:disabled {
      color: ${(props: ThemeProps) => props.theme.colors.disabled.base};
      border: 2px solid ${(props: ThemeProps) => props.theme.colors.disabled.base};
      cursor: not-allowed;
      span,
      p {
        color: ${(props: ThemeProps) => props.theme.colors.disabled.base} !important;
      }
    }
  }
`;
