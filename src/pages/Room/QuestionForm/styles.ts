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
