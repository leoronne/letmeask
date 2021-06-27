import { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Fade } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import QuestionForm from './QuestionForm';
import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';

import * as Icons from '../../components/ui/Icons';
import { Breadcrumb, FlexContainer, LoaderSpinner, Tooltip } from '../../components/ui';
import { Question, RoomHeader } from '../../components/application';

import { useAuth, useRoom } from '../../hooks';

import kFormatter from '../../utils/kFormatter';

import * as Styles from './styles';
import AnsweredQuestion from './AnsweredQuestion';
import HighlightQuestion from './HighlightQuestion';

interface RoomParams {
  id: string;
}

function Room() {
  const { enqueueSnackbar } = useSnackbar();

  const params = useParams<RoomParams>();
  const roomId = params?.id;

  const { user, signInWithGoogle, loadingAuth } = useAuth();
  const { questions, currentRoom, loadingRoom } = useRoom(roomId);

  const isAdmin = useMemo(
    () => Boolean(user && currentRoom && user?.id === currentRoom?.authorId),
    [user, currentRoom]
  );

  if (loadingRoom || loadingAuth) {
    return (
      <FlexContainer height={0}>
        <LoaderSpinner size={40} />
      </FlexContainer>
    );
  }

  if (!loadingRoom && (!currentRoom || currentRoom.endedAt) && currentRoom?.authorId !== user?.id) {
    enqueueSnackbar('Sala encerrada ou não encontrada', { variant: 'error', preventDuplicate: true });
    return <Redirect to="/" />;
  }

  return (
    <Fade in timeout={500} disableStrictModeCompat>
      <Styles.Container>
        <RoomHeader id={roomId} admin={isAdmin} user={user} roomTitle={currentRoom?.title} />

        <Styles.Main height={questions.length === 0 ? '100%' : 'auto'}>
          <Styles.RoomTitle>
            <Tooltip title={String(currentRoom?.title)} placement="right" arrow>
              <Styles.Title>{`Sala ${currentRoom?.title}`}</Styles.Title>
            </Tooltip>
            {questions.length > 0 && <Breadcrumb>{kFormatter(questions.length)} perguntas</Breadcrumb>}
          </Styles.RoomTitle>

          {!isAdmin && <QuestionForm user={user} roomId={roomId} signIn={signInWithGoogle} />}

          {questions.length === 0 ? (
            <Styles.NoQuestionsContainer>
              <Icons.EmptyQuestionsIcon width={150} height={150} />
              <Styles.NoQuestionsTitle>Nenhuma pergunta por aqui...</Styles.NoQuestionsTitle>
            </Styles.NoQuestionsContainer>
          ) : (
            questions.map(question => (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                admin={isAdmin}
                answered={Boolean(question?.isAnswered)}
                highlighted={Boolean(question?.isHighlighted)}
              >
                {isAdmin && (
                  <>
                    <AnsweredQuestion
                      roomId={roomId}
                      questionId={question.id}
                      answered={Boolean(question?.isAnswered)}
                    />
                    <HighlightQuestion
                      roomId={roomId}
                      questionId={question.id}
                      highlighted={Boolean(question?.isHighlighted)}
                    />
                    <DeleteButton roomId={roomId} questionId={question.id} />
                  </>
                )}
                {!isAdmin && !question.isAnswered && (
                  <LikeButton
                    liked={question?.hasLiked}
                    likes={question?.likeCount}
                    likeId={question?.likeId}
                    roomId={roomId}
                    questionId={question.id}
                    user={user}
                  />
                )}
              </Question>
            ))
          )}
        </Styles.Main>
      </Styles.Container>
    </Fade>
  );
}

export default Room;
