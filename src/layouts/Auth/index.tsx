import { ReactNode } from 'react';
import { Fade } from '@material-ui/core';

import { useAuth, useLanguage } from '../../hooks';

import { LoaderSpinner, FlexContainer } from '../../components/ui';

import * as Styles from './styles';

interface Props {
  children: ReactNode;
}

function Auth({ children }: Props) {
  const { loadingAuth } = useAuth();
  const { translate } = useLanguage();

  return (
    <Fade in timeout={500}>
      <Styles.Container>
        <Styles.Aside>
          <Styles.HomeIllustration />
          <Styles.Title>{translate('home-title-1')}</Styles.Title>
          <Styles.Subtitle>{translate('home-title-2')}</Styles.Subtitle>
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
