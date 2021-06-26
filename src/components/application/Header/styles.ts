import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e2e2e2;
  min-height: 85px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }
`;

export const ButtonsContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }: ThemeProps) => theme.spacing[2]};
`;
