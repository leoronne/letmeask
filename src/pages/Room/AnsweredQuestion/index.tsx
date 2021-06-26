import { useSnackbar } from 'notistack';

import * as Icons from '../../../components/ui/Icons';
import { IconButton } from '../../../components/ui';

import { database } from '../../../services/firebase';

import { colors, borderRadius } from '../../../styles/theme';

interface AnsweredQuestionProps {
  roomId: string;
  questionId: string;
  answered: boolean;
}

function AnsweredQuestion({ roomId, questionId, answered }: AnsweredQuestionProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleCheckQuestionAsAnswered = async () => {
    try {
      if (questionId.trim() === '') {
        return;
      }

      if (answered) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
          isAnswered: false,
        });
        return;
      }

      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
      });
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    }
  };

  return (
    <IconButton
      aria-label="Marcar como respondida"
      border_radius={borderRadius.extraLarge}
      padding={6}
      width="32px"
      height={32}
      onClick={() => handleCheckQuestionAsAnswered()}
    >
      <Icons.AnsweredIcon width={15} height={15} fill={answered ? colors.secondary.base : colors.black[40]} />
    </IconButton>
  );
}

export default AnsweredQuestion;
