import styled, { css } from 'styled-components';

import { CgLogIn } from 'react-icons/cg';
import { MdCreateNewFolder } from 'react-icons/md';

import { ReactComponent as Logo } from '../../../assets/img/svg/logo.svg';
import { ReactComponent as Google } from '../../../assets/img/svg/google.svg';

interface IconProps {
  width: number;
  height: number;
  margin_top?: number;
  margin_bottom?: number;
}

const iconCSS = css`
  width: ${({ width }: IconProps) => width}px;
  height: ${({ height }: IconProps) => height}px;

  margin-top: ${({ margin_top }: IconProps) => margin_top || 0}px;
  margin-bottom: ${({ margin_bottom }: IconProps) => margin_bottom || 0}px;
`;

export const LogoIcon = styled(Logo)<IconProps>`
  ${iconCSS}
`;

export const GoogleIcon = styled(Google)<IconProps>`
  ${iconCSS}
`;

export const LoginIcon = styled(CgLogIn)<IconProps>`
  ${iconCSS}
`;

export const CreateIcon = styled(MdCreateNewFolder)<IconProps>`
  ${iconCSS}
`;
