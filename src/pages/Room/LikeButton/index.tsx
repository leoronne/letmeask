import { useSnackbar } from 'notistack';

import * as Icons from '../../../components/ui/Icons';
import { IconButton, Tooltip } from '../../../components/ui';

import { database } from '../../../services/firebase';

import { User } from '../../../hooks/useAuth';
import { useLanguage } from '../../../hooks';

import kFormatter from '../../../utils/kFormatter';

import { colors, borderRadius } from '../../../styles/theme';
import * as Styles from './styles';

interface LikeButtonProps {
  liked: boolean;
  likes: number;
  roomId: string;
  questionId: string;
  likeId: string | undefined;
  user: User | undefined;
}

function LikeButton({ user, liked, likes, roomId, questionId, likeId }: LikeButtonProps) {
  const { enqueueSnackbar } = useSnackbar();

  const { translate } = useLanguage();

  const handleLikeQuestions = async () => {
    try {
      if (questionId.trim() === '') {
        return;
      }

      if (likeId) {
        await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
        return;
      }

      if (!user) {
        throw new Error(translate('must-be-logged'));
      }

      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    }
  };

  return (
    <Tooltip title={liked ? translate('mark-not-liked') : translate('mark-liked')} placement="bottom" arrow>
      <IconButton
        aria-label={liked ? translate('mark-not-liked') : translate('mark-liked')}
        border_radius={borderRadius.extraLarge}
        padding={6}
        width={likes > 0 ? 'max-content' : '32px'}
        height={32}
        onClick={() => handleLikeQuestions()}
      >
        {likes > 0 && <Styles.Likes liked={liked}>{kFormatter(likes)}</Styles.Likes>}
        <Icons.LikeIcon width={15} height={15} fill={liked ? colors.primary.base : colors.black[40]} />
      </IconButton>
    </Tooltip>
  );
}

export default LikeButton;
