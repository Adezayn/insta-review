'use client'
import { createContext, useContext } from "react";
import useFirebaseAuth from "@/utils/hooks/useFirebaseAuth";
import { User } from "@/utils/types";


interface ContextProps {
  authUser: User | null;
  loading: boolean;
}
const authUserContext = createContext<ContextProps>({
  authUser: null,
  loading: false,
});

export function AuthUserProvider({ children }: {children: React.ReactNode}) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
