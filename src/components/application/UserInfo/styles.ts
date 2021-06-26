import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface UserNameProps extends ThemeProps {
  font_size?: number;
  color?: string;
}

export const UserName = styled.h3<UserNameProps>`
  ${({ theme }: UserNameProps) => theme.typography.heading6};
  margin-left: 10px;
  color: ${({ theme, color }: UserNameProps) => color || theme.colors.black[80]};

  ${({ font_size }: UserNameProps) =>
    font_size &&
    css`
      font-size: ${font_size}px;
    `}

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 14px;
    margin-left: ${({ theme }: UserNameProps) => theme.spacing[1]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }
`;
