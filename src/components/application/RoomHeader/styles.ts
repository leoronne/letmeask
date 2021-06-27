import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #e2e2e2;
  min-height: 85px;
`;

export const ButtonsContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }: ThemeProps) => theme.spacing[2]};
`;
