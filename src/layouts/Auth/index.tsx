import { ReactNode } from 'react';
import { Fade } from '@material-ui/core';

import { useAuth } from '../../hooks';

import { LoaderSpinner, FlexContainer } from '../../components/ui';

import * as Styles from './styles';

interface Props {
  children: ReactNode;
}

function Auth({ children }: Props) {
  const { loadingAuth } = useAuth();
  return (
    <Fade in timeout={500}>
      <Styles.Container>
        <Styles.Aside>
          <Styles.HomeIllustration />
          <Styles.Title>Toda pergunta tem uma resposta.</Styles.Title>
          <Styles.Subtitle>Aprenda e compartilhe conhecimento com outras pessoas</Styles.Subtitle>
        </Styles.Aside>
        {loadingAuth ? (
          <FlexContainer height={0} flex={8}>
            <LoaderSpinner size={40} />
          </FlexContainer>
        ) : (
          children
        )}
      </Styles.Container>
    </Fade>
  );
}

export default Auth;
