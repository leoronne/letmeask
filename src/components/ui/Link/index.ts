import { LinkHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

interface LinkProps extends ThemeProps, LinkHTMLAttributes<HTMLLinkElement> {
  hasDecoration?: boolean;
  fontSize?: number;
  marginTop?: number;
  color?: string;
}

export const Link = styled(RouterLink)<LinkProps>`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ color, theme }: LinkProps) => color || theme.colors.primary.base};
  font-weight: 500;
  text-decoration: ${({ hasDecoration }: LinkProps) => (hasDecoration ? 'underline' : 'none')};
  font-size: ${({ fontSize }: LinkProps) => (fontSize ? `${fontSize}px` : 'initial')};

  margin-top: ${({ marginTop }: LinkProps) => marginTop || 0}px;

  transition: ${({ theme }: LinkProps) => theme.transitions.easeInOut.base};

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ color, theme }: LinkProps) => color || theme.colors.primary.base};
    visibility: hidden;
    transition: ${({ theme }: LinkProps) => theme.transitions.easeInOut.base};
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  &:hover {
    transition: ${({ theme }: LinkProps) => theme.transitions.easeInOut.base};
  }

  svg {
    margin-right: ${({ theme }: LinkProps) => theme.spacing[1]};
  }
`;
