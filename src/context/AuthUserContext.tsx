'use client'
import { createContext, useEffect } from "react";
import useFirebaseAuth, { FormattedUser } from "@/utils/hooks/useFirebaseAuth";
import { useAppDispatch } from "@/redux/hooks";
import { getUserDetails } from "@/app/actions/auth";
import { updateAuthInfo } from "@/redux/authSlice";


interface ContextProps {
  authUser: FormattedUser | null;
  loading: boolean;
  logout: ()=>void;
  setAuthUserInfo: (userInfo: Partial<FormattedUser>) => void;
}
export const AuthUserContext = createContext<ContextProps>({
  authUser: null,
  loading: false,
  logout: ()=>{},
  setAuthUserInfo: ()=>{}
});

export const AuthUserProvider = ({ children }: {children: React.ReactNode}) => {
  const auth = useFirebaseAuth();
  const dispatch = useAppDispatch();
  // console.log(auth, "===authuser&loading===",auth.authUser)
  const {authUser, setAuthUserInfo} = auth;

  const fetchUserInfoMore = async () => {
    if(authUser) {
      const {user, error} = await getUserDetails(authUser.uid);
      if(user){
        const updatedUser = {
          ...user,
          uid: authUser.uid
        }
        dispatch(updateAuthInfo(updatedUser));
      };
    };
  }
  useEffect(()=>{
    fetchUserInfoMore()
  },[authUser])
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
