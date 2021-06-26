import { ReactNode } from 'react';
import { AuthProvider, useAuth } from './useAuth';
import { useRoom } from './useRoom';

interface Props {
  children: ReactNode;
}

function HooksProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default HooksProvider;
export { useAuth, useRoom };
