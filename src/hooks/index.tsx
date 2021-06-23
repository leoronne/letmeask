import { ReactNode } from 'react';
import { AuthProvider, useAuth } from './useAuth';

interface Props {
  children: ReactNode;
}

function HooksProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default HooksProvider;
export { useAuth };
