import styled from 'styled-components';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

export const Container = styled.div``;

export const Modal = styled(Dialog)<ThemeProps>`
  .MuiDialog-paper {
    border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.large};
  }
`;
export const Content = styled(DialogContent)<ThemeProps>`
  &.MuiDialogContent-root {
    padding-bottom: ${({ theme }: ThemeProps) => theme.spacing[4]};
  }
`;

export const Header = styled(DialogTitle)<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.MuiDialogTitle-root {
    padding: ${({ theme }: ThemeProps) => theme.spacing[1]} ${({ theme }: ThemeProps) => theme.spacing[2]};
  }
`;

export const Title = styled.h3<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading3}
  color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  padding: 0;
  font-weight: 600;
`;

export const ModalContent = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  gap: ${({ theme }: ThemeProps) => theme.spacing[1]};
`;

export const ModalContentTitle = styled.h2<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading2}
  color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  padding: 0;
  font-weight: 600;
`;

export const ModalContentSubtitle = styled.span<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.caption1}
  color: ${({ theme }: ThemeProps) => theme.colors.black[70]};
`;

export const ModalActions = styled(DialogActions)<ThemeProps>`
  &.MuiDialogActions-root {
    margin-top: ${({ theme }: ThemeProps) => theme.spacing[2]};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
