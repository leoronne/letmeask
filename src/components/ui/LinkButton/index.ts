import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface LinkButtonProps extends ThemeProps, ButtonHTMLAttributes<HTMLButtonElement> {
  flex?: boolean;
}

export const LinkButton = styled.button<LinkButtonProps>`
  ${({ flex }: LinkButtonProps) =>
    flex &&
    css`
      display: flex;
      align-items: center;
    `}
  position: relative;
  color: ${({ theme }: LinkButtonProps) => theme.colors.primary.base};
  font-weight: 500;
  font-size: 'initial';
  background: transparent;

  transition: ${({ theme }: LinkButtonProps) => theme.transitions.easeInOut.base};
  outline: none;
  border: none;
  cursor: pointer;

  svg {
    margin-right: ${({ theme }: LinkButtonProps) => theme.spacing[1]};
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }: LinkButtonProps) => theme.colors.primary.base};
    visibility: hidden;
    transition: ${({ theme }: LinkButtonProps) => theme.transitions.easeInOut.base};
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  &:hover {
    background: transparent;
    transition: ${({ theme }: LinkButtonProps) => theme.transitions.easeInOut.base};
  }
`;
