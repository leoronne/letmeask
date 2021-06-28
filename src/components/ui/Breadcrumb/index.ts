import styled from 'styled-components';

interface BreadcrumbProps extends ThemeProps {
  margin_left?: number;
}

export const Breadcrumb = styled.span<BreadcrumbProps>`
  margin-left: ${({ margin_left, theme }: BreadcrumbProps) => margin_left || 0}px;
  padding: ${({ theme }: BreadcrumbProps) => theme.spacing[1]} ${({ theme }: BreadcrumbProps) => theme.spacing[2]};
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }: BreadcrumbProps) => theme.colors.white.base};
  background: ${({ theme }: BreadcrumbProps) => theme.colors.secondary.base};
  border-radius: ${({ theme }: BreadcrumbProps) => theme.borderRadius.large};

  text-align: center;
`;
