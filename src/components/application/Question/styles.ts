import styled, { css } from 'styled-components';

interface QuestionProps extends ThemeProps {
  isAdmin: boolean;
}

export const Container = styled.div<ThemeProps>`
  background: ${({ theme }: ThemeProps) => theme.colors.white[50]};
  width: 100%;
  box-shadow: 0px 2px 12px ${({ theme }: ThemeProps) => theme.colors.black[12]};
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.base};
  padding: ${({ theme }: ThemeProps) => theme.spacing[3]};

  margin-top: ${({ theme }: ThemeProps) => theme.spacing[2]};

  border: 2px solid transparent;

  &.answered {
    background: ${({ theme }: ThemeProps) => theme.colors.black['12']} !important;
    border-color: ${({ theme }: ThemeProps) => theme.colors.primary['08']} !important;
  }

  &.highlighted {
    background: ${({ theme }: ThemeProps) => theme.colors.primary['08']};
    border-color: ${({ theme }: ThemeProps) => theme.colors.primary['40']};
  }
`;

export const Question = styled.p<QuestionProps>`
  font-weight: 500;
  color: ${({ theme }: QuestionProps) => theme.colors.black[90]};
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isAdmin }: QuestionProps) =>
    isAdmin &&
    css`
      @media (max-width: 375px) {
        text-align: center;
      }
    `};
`;

export const Footer = styled.div<QuestionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }: QuestionProps) => theme.spacing[3]};

  ${({ isAdmin }: QuestionProps) =>
    isAdmin &&
    css`
      @media (max-width: 375px) {
        gap: ${({ theme }: QuestionProps) => theme.spacing[1]};
        flex-direction: column;
        justify-content: center;
      }
    `};
`;

export const Actions = styled.div<ThemeProps>`
  gap: ${({ theme }: ThemeProps) => theme.spacing[1]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
