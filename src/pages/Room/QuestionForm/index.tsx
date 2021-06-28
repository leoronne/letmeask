import { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { UserInfo } from '../../../components/application';
import * as Icons from '../../../components/ui/Icons';
import { ButtonOutlined, Form, Input, LinkButton, LoaderSpinner } from '../../../components/ui';

import { User } from '../../../hooks/useAuth';
import { useLanguage } from '../../../hooks';

import { database } from '../../../services/firebase';

import * as Styles from './styles';

interface QuestionFormProps {
  user: User | undefined;
  roomId: string;
  signIn: () => Promise<void>;
}

function QuestionForm({ user, roomId, signIn }: QuestionFormProps) {
  const { enqueueSnackbar } = useSnackbar();

  const { translate } = useLanguage();

  const [newQuestion, setNewQuestion] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const handleSendQuestion = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoadingSubmit(true);

      if (newQuestion.trim() === '') {
        setNewQuestion('');
        return;
      }

      if (!user) {
        throw new Error(translate('must-be-logged'));
      }

      const question = {
        content: newQuestion,
        author: {
          name: user?.name,
          avatar: user.avatar,
        },
        isHighlighted: false,
        isAnswered: false,
        createdAt: String(new Date(Date.now())),
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleSignIn = async () => {
    try {
      if (!user) {
        await signIn();
      }
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    }
  };

  return (
    <Form onSubmit={handleSendQuestion} min_height={170}>
      <Input
        name="question"
        type="text"
        label={translate('want-to-ask')}
        aria-label={translate('want-to-ask')}
        value={newQuestion}
        variant="outlined"
        onChange={e => setNewQuestion(e.target.value)}
        height={100}
        required
        multiline
      />
      <Styles.FormFooter>
        {user ? (
          <UserInfo user={user} />
        ) : (
          <Styles.Authenticate>
            {`${translate('not-logged-send-question-1')}, `}
            <LinkButton type="button" aria-label={translate('must-be-logged')} onClick={handleSignIn}>
              {translate('not-logged-send-question-2')}
            </LinkButton>
            .
          </Styles.Authenticate>
        )}

        <ButtonOutlined
          type="submit"
          aria-label={translate('send-question')}
          disabled={!user || loadingSubmit || !newQuestion.trim()}
          max_width="max-content"
        >
          {loadingSubmit ? <LoaderSpinner size={20} /> : <Icons.SendIcon />}
          <p>{translate('send-question')}</p>
        </ButtonOutlined>
      </Styles.FormFooter>
    </Form>
  );
}

export default QuestionForm;
