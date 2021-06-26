import styled from 'styled-components';

interface ContainerProps extends ThemeProps {
  height?: number;
  width?: number;
  flex?: number;
}

export const FlexContainer = styled.div<ContainerProps>`
  padding: 0 ${({ theme }: ContainerProps) => theme.spacing[4]};
  flex: ${({ flex }: ContainerProps) => flex || 'initial'};
  width: ${({ width }: ContainerProps) => (width ? `${width}px` : 'auto')};
  height: ${({ height }: ContainerProps) => `calc(100% - ${Number(height) >= 0 ? height : 85}px)`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
