import { ReactNode } from 'react';

import * as Styles from './styles';

interface Props {
  children: ReactNode;
}

function Auth({ children }: Props) {
  return (
    <Styles.Container>
      <Styles.Aside>
        <Styles.HomeIllustration />
        <Styles.Title>Toda pergunta tem uma resposta.</Styles.Title>
        <Styles.Subtitle>Aprenda e compartilhe conhecimento com outras pessoas</Styles.Subtitle>
      </Styles.Aside>
      {children}
    </Styles.Container>
  );
}

export default Auth;
