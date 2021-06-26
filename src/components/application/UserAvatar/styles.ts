import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ImgProps extends ThemeProps, ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  border_radius?: string;
  margin_right?: string;
}

export const Container = styled.img<ImgProps>`
  width: ${({ width }: ImgProps) => width || 32}px;
  height: ${({ height }: ImgProps) => height || 32}px;
  border-radius: ${({ border_radius }: ImgProps) => border_radius || '50%'};
  margin-right: ${({ margin_right }: ImgProps) => margin_right || 0};

  @media (max-width: 425px) {
    width: ${({ theme }: ImgProps) => theme.spacing[2]};
    height: ${({ theme }: ImgProps) => theme.spacing[2]};
  }
`;
