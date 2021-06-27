import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div<ThemeProps>`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  p {
    ${({ theme }: ThemeProps) => theme.typography.caption2};
    color: ${({ theme }: ThemeProps) => theme.colors.black[70]};
    margin-top: ${({ theme }: ThemeProps) => theme.spacing[1]};
  }
`;


interface ButtonProps extends ThemeProps, ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  fill: string;
}

export const CircleButton = styled(Button)<ButtonProps>`
  &.MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: ${({ theme }: ButtonProps) => theme.spacing[7]};
    width: ${({ theme }: ButtonProps) => theme.spacing[7]};
    min-width: ${({ theme }: ButtonProps) => theme.spacing[7]};
    background-color: ${({ background }: ButtonProps) => background};
    outline: none;
    border: none;
    border-radius: 50%;

    transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};

    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background-color: ${({ background }: ButtonProps) => background};
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
      filter: brightness(0.85);
    }
  }
`;
