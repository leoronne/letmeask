import { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { UserInfo } from '../../../components/application';
import * as Icons from '../../../components/ui/Icons';
import { ButtonOutlined, Form, Input, LoaderSpinner } from '../../../components/ui';

import { User } from '../../../hooks/useAuth';

import { database } from '../../../services/firebase';

import * as Styles from './styles';

interface QuestionFormProps {
  user: User | undefined;
  roomId: string;
  signIn: () => Promise<void>;
}

function QuestionForm({ user, roomId, signIn }: QuestionFormProps) {
  const { enqueueSnackbar } = useSnackbar();

  const [newQuestion, setNewQuestion] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const handleSendQuestion = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoadingSubmit(true);
      if (newQuestion.trim() === '') {
        return;
      }

      if (!user) {
        throw new Error('You must be logged in');
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
        label="O que você quer perguntar?"
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
            Para enviar uma pergunta,{' '}
            <Styles.AuthenticateButton type="button" onClick={handleSignIn}>
              faça login
            </Styles.AuthenticateButton>
            .
          </Styles.Authenticate>
        )}

        <ButtonOutlined type="submit" disabled={!user || loadingSubmit || !newQuestion.trim()} max_width="max-content">
          {loadingSubmit ? <LoaderSpinner size={20} /> : <Icons.SendIcon />}
          <p>Enviar pergunta</p>
        </ButtonOutlined>
      </Styles.FormFooter>
    </Form>
  );
}

export default QuestionForm;
