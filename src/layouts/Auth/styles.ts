import styled from 'styled-components';

import { ReactComponent as Illustration } from '../../assets/img/svg/home-bg.svg';

export const HomeIllustration = styled(Illustration)`
  max-width: 350px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Aside = styled.aside`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px ${({ theme }: ThemeProps) => theme.spacing[10]};

  background: linear-gradient(
    25.44deg,
    ${({ theme }: ThemeProps) => theme.colors.primary.base} 45%,
    ${({ theme }: ThemeProps) => theme.colors.secondary.base} 99.89%
  );

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Title = styled.h1<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading1};
  color: ${({ theme }: ThemeProps) => theme.colors.white.base};
`;

export const Subtitle = styled.h6<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading6};
  color: ${({ theme }: ThemeProps) => theme.colors.white[70]};
`;
