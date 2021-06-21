import styled from 'styled-components';

import { ReactComponent as Illustration } from '../../assets/img/svg/home-bg.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContentProps extends ThemeProps {
  background?: 'primary' | 'white';
}

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 50%;
  height: 100%;
  padding: 50px;
  background: ${(props: ContentProps) => (props.background === 'primary' ? props.theme.colors.primary.base : props.theme.colors.white.base)};
`;

export const HomeIllustration = styled(Illustration)`
  max-width: 350px;
`;

export const Title = styled.h1<ThemeProps>`
  ${(props: ThemeProps) => props.theme.typography.heading1};
  color: ${(props: ThemeProps) => props.theme.colors.white.base};
`;

export const Subtitle = styled.h6<ThemeProps>`
  ${(props: ThemeProps) => props.theme.typography.heading6};
  color: ${(props: ThemeProps) => props.theme.colors.white[70]};
`;
