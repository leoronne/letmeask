import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { database } from '../services/firebase';

import { useAuth } from './useAuth';
import { useLanguage } from './useLanguage';

interface Room {
  authorId: string;
  title: string;
  questions?: FirabaseQuestions;
  endedAt: Date | undefined;
}

export function useRoom(roomId: string) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const { user } = useAuth();
  const { translate } = useLanguage();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room>();
  const [loadingRoom, setLoadingRooms] = useState<boolean>(true);

  // eslint-disable-next-line consistent-return
  const getQuestions = useCallback(async () => {
    try {
      setLoadingRooms(true);
      const roomRef = await database.ref(`rooms/${roomId}`);

      roomRef.on(
        'value',
        room => {
          const databaseRoom: Room = room.val();
          setCurrentRoom(databaseRoom);
          const firebaseQuestions = databaseRoom?.questions;

          const parsedQuestions = firebaseQuestions
            ? Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                  id: key,
                  content: value?.content,
                  author: value?.author,
                  isHighlighted: value?.isHighlighted,
                  isAnswered: value?.isAnswered,
                  likeCount: Object.values(value.likes ?? {}).length,
                  hasLiked: Object.values(value.likes ?? {}).some(like => like?.authorId === user?.id),
                  // eslint-disable-next-line no-shadow
                  likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like?.authorId === user?.id)?.[0],
                  createdAt: value?.createdAt,
                };
              })
            : [];

          const highlightedQuestions = parsedQuestions.filter(q => {
            return q.isHighlighted === true;
          });

          const notHighlightedQuestions = parsedQuestions.filter(q => {
            return q.isHighlighted === false;
          });

          highlightedQuestions.sort((a, b) => {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
          });

          notHighlightedQuestions.sort((a, b) => {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
          });

          setQuestions([...highlightedQuestions, ...notHighlightedQuestions]);
          setLoadingRooms(false);
        },
        () => {
          setQuestions([]);
          setLoadingRooms(false);
          enqueueSnackbar(translate('invalid-room'), { variant: 'error', preventDuplicate: true });
          history.push('/');
        }
      );

      return () => {
        roomRef.off('value');
      };
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
    }
  }, [roomId, user, enqueueSnackbar, history, translate]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return { questions, currentRoom, loadingRoom };
}
