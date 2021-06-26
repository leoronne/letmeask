import { ReactNode } from 'react';

import * as Styles from './styles';

interface Props {
  children: ReactNode;
}

function Room({ children }: Props) {
  return <Styles.Container> {children} </Styles.Container>;
}

export default Room;
