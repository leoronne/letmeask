import { createContext, ReactNode, useEffect, useState, useContext, useCallback } from 'react';
import { useSnackbar } from 'notistack';

import { auth, firebase } from '../services/firebase';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  user?: User;
  loadingAuth: boolean;
  signInWithGoogle(): Promise<void>;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<User>();
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result?.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };

  const getUser = useCallback(async () => {
    try {
      setLoadingAuth(true);
      await auth.onAuthStateChanged(
        usr => {
          if (usr) {
            const { displayName, photoURL, uid } = usr;

            if (!displayName || !photoURL) {
              throw new Error('');
            }

            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
            });
          }
          setLoadingAuth(false);
        },
        err => {
          throw new Error(err.message);
        }
      );
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error || err.message, { variant: 'error' });
      setLoadingAuth(false);
    }
  }, [enqueueSnackbar]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return <AuthContext.Provider value={{ user, signInWithGoogle, loadingAuth }}>{children}</AuthContext.Provider>;
}

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { useAuth, AuthProvider };
