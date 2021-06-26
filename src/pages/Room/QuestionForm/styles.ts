import styled from 'styled-components';

export const FormFooter = styled.footer<ThemeProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }: ThemeProps) => theme.spacing[2]};

  @media (max-width: 425px) {
    flex-direction: column-reverse;
    gap: ${({ theme }: ThemeProps) => theme.spacing[1]};
  }
`;

export const Authenticate = styled.div<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.caption1}
  color: ${({ theme }: ThemeProps) => theme.colors.black[80]};
`;

export const AuthenticateButton = styled.button<ThemeProps>`
  position: relative;
  color: ${({ theme }: ThemeProps) => theme.colors.primary.base};
  font-weight: 500;
  font-size: 'initial';
  background: transparent;

  transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  outline: none;
  border: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }: ThemeProps) => theme.colors.primary.base};
    visibility: hidden;
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  &:hover {
    background: transparent;
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }
`;
