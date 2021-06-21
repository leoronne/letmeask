import React from 'react';

import * as Styles from './styles';

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Content background="primary">
        <Styles.HomeIllustration />
        <Styles.Title>Toda pergunta tem uma resposta.</Styles.Title>
        <Styles.Subtitle>Aprenda e compartilhe conhecimento com outras pessoas</Styles.Subtitle>
      </Styles.Content>

      <Styles.Content />
    </Styles.Container>
  );
};

export default Home;
