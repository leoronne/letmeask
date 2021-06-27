import styled from 'styled-components';

export const Button = styled.button<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }: ThemeProps) => theme.colors.primary.base};
  border: 2px solid ${({ theme }: ThemeProps) => theme.colors.primary.base};

  text-transform: none;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 2px 12px ${({ theme }: ThemeProps) => theme.colors.black[12]};

  height: 40px;
  width: 'max-content';
  min-width: 260px;
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.base};
  padding: 6px ${({ theme }: ThemeProps) => theme.spacing[1]};

  outline: none;

  transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};

  font-size: 16px;

  svg + p {
    margin-left: ${({ theme }: ThemeProps) => theme.spacing[2]};
  }

  div + p {
    margin-left: ${({ theme }: ThemeProps) => theme.spacing[2]};
  }

  span,
  svg,
  p {
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }

  &:hover {
    background: ${({ theme }: ThemeProps) => theme.colors.primary.base};
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    border-color: transparent;

    p,
    svg {
      transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
      color: ${({ theme }: ThemeProps) => theme.colors.white.base};
      fill: ${({ theme }: ThemeProps) => theme.colors.white.base};
    }

    path {
      fill: ${({ theme }: ThemeProps) => theme.colors.white.base};
    }
  }

  &:disabled {
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    background: ${({ theme }: ThemeProps) => theme.colors.disabled.base};
    border: 2px solid ${({ theme }: ThemeProps) => theme.colors.black['12']};
    box-shadow: 0px 2px 12px ${({ theme }: ThemeProps) => theme.colors.black['08']};
    cursor: not-allowed;

    span,
    p,
    svg {
      transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
      color: ${({ theme }: ThemeProps) => theme.colors.disabled.text} !important;
    }
  }

  @media (max-width: 696px) {
    min-width: 150px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 80px;
    }
  }
`;
