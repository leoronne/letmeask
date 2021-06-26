import styled, { css } from 'styled-components';

import { CgLogIn } from 'react-icons/cg';
import { FaCopy, FaHome } from 'react-icons/fa';
import { MdCreateNewFolder } from 'react-icons/md';
import { BsCheckBox } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineDelete, AiOutlineCheckCircle } from 'react-icons/ai';
import { IoMdClose, IoIosSend } from 'react-icons/io';
import { VscCloseAll } from 'react-icons/vsc';
import { ImCancelCircle } from 'react-icons/im';
import { GiStarFormation } from 'react-icons/gi';

import { ReactComponent as Logo } from '../../../assets/img/svg/logo.svg';
import { ReactComponent as LogoWhite } from '../../../assets/img/svg/logo-white.svg';
import { ReactComponent as Google } from '../../../assets/img/svg/google.svg';
import { ReactComponent as Empty } from '../../../assets/img/svg/empty-questions.svg';

interface IconProps {
  width?: number;
  height?: number;
  margin_top?: number;
  margin_bottom?: number;
  fill?: string;
}

const iconCSS = css`
  fill: ${({ fill }: IconProps) => fill || 'auto'};
  width: ${({ width }: IconProps) => width || 25}px;
  height: ${({ height }: IconProps) => height || 25}px;

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

export const CopyIcon = styled(FaCopy)<IconProps>`
  ${iconCSS}
`;

export const CheckedIcon = styled(BsCheckBox)<IconProps>`
  ${iconCSS}
`;

export const AnsweredIcon = styled(AiOutlineCheckCircle)<IconProps>`
  ${iconCSS}
`;

export const CloseIcon = styled(IoMdClose)<IconProps>`
  ${iconCSS}
`;

export const CloseAllIcon = styled(VscCloseAll)<IconProps>`
  ${iconCSS}
`;

export const SendIcon = styled(IoIosSend)<IconProps>`
  ${iconCSS}
`;

export const LikeIcon = styled(AiOutlineLike)<IconProps>`
  ${iconCSS}
`;

export const DeleteIcon = styled(AiOutlineDelete)<IconProps>`
  ${iconCSS}
`;

export const EmptyQuestionsIcon = styled(Empty)<IconProps>`
  ${iconCSS}
`;

export const EndRoomIcon = styled(ImCancelCircle)<IconProps>`
  ${iconCSS}
`;

export const HighlightIcon = styled(GiStarFormation)<IconProps>`
  ${iconCSS}
`;

export const HomeIcon = styled(FaHome)`
  ${iconCSS}
`;

export const LogoWhiteIcon = styled(LogoWhite)`
  ${iconCSS}
`;
