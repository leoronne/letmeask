import styled from 'styled-components';

interface AnimatedCheckProps extends ThemeProps {
  width?: number;
  height?: number;
  fill?: string;
  isLoading: boolean;
}

export const Container = styled.div<AnimatedCheckProps>`
  display: ${({ isLoading }: AnimatedCheckProps) => (isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  #tick {
    stroke: ${({ theme }: AnimatedCheckProps) => theme.colors.secondary[80]};
    stroke-width: 8;
    transition: all 1s;
  }

  #circle {
    stroke: ${({ theme }: AnimatedCheckProps) => theme.colors.secondary[80]};
    stroke-width: 8;
    transform-origin: 50px 50px 0;
    transition: all 1s;
  }

  .progress #tick {
    opacity: 0;
  }

  .ready #tick {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 1.5s ease-out forwards;
  }

  .progress #circle {
    stroke: ${({ theme }: AnimatedCheckProps) => theme.colors.black[50]};
    stroke-dasharray: 314;
    stroke-dashoffset: 1000;
    animation: spin 3s linear infinite;
  }

  .ready #circle {
    stroke-dashoffset: 66;
    stroke: ${({ theme }: AnimatedCheckProps) => theme.colors.secondary[80]};
  }

  #circle {
    stroke-dasharray: 500;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dashoffset: 66;
    }
    50% {
      transform: rotate(540deg);
      stroke-dashoffset: 314;
    }
    100% {
      transform: rotate(1080deg);
      stroke-dashoffset: 96;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
