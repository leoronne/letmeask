import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

interface MainProps extends ThemeProps {
  height: string;
}

export const Main = styled.main<MainProps>`
  max-width: 800px;
  width: 100%;
  height: ${({ height }: MainProps) => height};
  margin: 0 auto;
  padding: ${({ theme }: MainProps) => theme.spacing[3]};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RoomTitle = styled.div<ThemeProps>`
  margin: ${({ theme }: ThemeProps) => theme.spacing[2]} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading2}
  padding: 0;
  font-weight: 600;
  color: ${({ theme }: ThemeProps) => theme.colors.black.base};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const NoQuestionsContainer = styled.div<ThemeProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  flex-direction: column;
  gap: ${({ theme }: ThemeProps) => theme.spacing[2]};
  padding: ${({ theme }: ThemeProps) => theme.spacing[3]} 0;
`;

export const NoQuestionsTitle = styled.h4<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading4}
  padding: 0;
  font-weight: 500;
  color: ${({ theme }: ThemeProps) => theme.colors.black[90]};
`;

export const NoQuestionsSubTitle = styled.h6<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading6}
  padding: 0;
  font-weight: 400;
  color: ${({ theme }: ThemeProps) => theme.colors.black[60]};
`;
