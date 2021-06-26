import styled from 'styled-components';

interface LikesProps extends ThemeProps {
  liked?: boolean;
}

export const Likes = styled.p<LikesProps>`
  font-family: Poppins, Roboto, sans-serif;
  font-size: 12px;
  margin-right: 5px;
  margin-top: 1px;
  color: ${({ theme, liked }: LikesProps) => (liked ? theme.colors.primary.base : theme.colors.black[40])};
`;
