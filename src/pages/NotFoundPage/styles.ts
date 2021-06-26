import styled from 'styled-components';

import error from '../../assets/img/svg/404.svg';

export const Wrapper = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }: ThemeProps) => theme.colors.white.base};
  position: relative;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  background-image: linear-gradient(
    25.44deg,
    ${({ theme }: ThemeProps) => theme.colors.primary.base} 45%,
    ${({ theme }: ThemeProps) => theme.colors.secondary.base} 99.89%
  );

  padding: ${({ theme }: ThemeProps) => theme.spacing[5]};

  justify-content: center;

  flex-direction: column;

  @media (min-width: 735px) {
    padding: 120px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const Aside = styled.aside<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }: ThemeProps) => theme.colors.white.base};
  gap: ${({ theme }: ThemeProps) => theme.spacing[3]};

  @media (max-width: 735px) {
    text-align: center;
  }
`;

export const Title = styled.h1<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading1}
  font-weight: 700;
  color: ${({ theme }: ThemeProps) => theme.colors.white.base};
`;

export const SubTitle = styled.h6<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading6}
  font-weight: 400;
  color: ${({ theme }: ThemeProps) => theme.colors.white[70]};
`;

export const Right = styled.div`
  background: no-repeat url(${error}) center right;
  background-size: contain;
  height: 100%;
  width: 80%;
  @media (max-width: 735px) {
    display: none;
  }
`;

export const HomeLink = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }: ThemeProps) => theme.spacing[3]};
`;
