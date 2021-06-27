import { useSnackbar } from 'notistack';

import * as Icons from '../../../components/ui/Icons';
import { IconButton, Tooltip } from '../../../components/ui';

import { database } from '../../../services/firebase';

import { colors, borderRadius } from '../../../styles/theme';

interface HighlightQuestionProps {
  roomId: string;
  questionId: string;
  highlighted: boolean;
}

function HighlightQuestion({ roomId, questionId, highlighted }: HighlightQuestionProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleHighlightQuestion = async () => {
    try {
      if (questionId.trim() === '') {
        return;
      }

      if (highlighted) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
          isHighlighted: false,
        });
        return;
      }

      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
      });
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    }
  };

  return (
    <Tooltip title="Destacar pergunta" placement="bottom" arrow>
      <IconButton
        aria-label="Destacar pergunta"
        border_radius={borderRadius.extraLarge}
        padding={6}
        width="32px"
        height={32}
        onClick={() => handleHighlightQuestion()}
      >
        <Icons.HighlightIcon width={15} height={15} fill={highlighted ? colors.secondary.base : colors.black[40]} />
      </IconButton>
    </Tooltip>
  );
}

export default HighlightQuestion;
