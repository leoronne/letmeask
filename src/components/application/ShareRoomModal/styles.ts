import styled from 'styled-components';

export const Container = styled.div<ThemeProps>`
  width: 100%;
  padding-top: ${({ theme }: ThemeProps) => theme.spacing[2]};
`;

export const ShareOptionsContainer = styled.div<ThemeProps>`
  width: 100%;
  overflow-x: auto;
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacing[5]};

  display: flex;
  align-items: center;

  @media (min-width: 465px) {
    justify-content: space-around;
  }
`;
