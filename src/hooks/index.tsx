import { ReactNode } from 'react';
import { AuthProvider, useAuth } from './useAuth';

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
export { useAuth };
