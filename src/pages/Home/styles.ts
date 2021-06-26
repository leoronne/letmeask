import styled from 'styled-components';

export const Main = styled.main`
  flex: 8;
  padding: 0 ${({ theme }: ThemeProps) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    flex: 1;
    background: linear-gradient(
      139.44deg,
      ${({ theme }: ThemeProps) => theme.colors.primary.base} 0%,
      ${({ theme }: ThemeProps) => theme.colors.secondary.base} 96.19%
    );
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  width: 100%;
  max-width: 320px;

  @media (max-width: 860px) {
    padding: ${({ theme }: ThemeProps) => theme.spacing[3]};
    border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.large};

    background: ${({ theme }: ThemeProps) => theme.colors.white.base};
    box-shadow: 0px 2px 12px ${(props: ThemeProps) => props.theme.colors.black[50]};
  }
`;
