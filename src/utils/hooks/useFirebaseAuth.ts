// lib/useFirebaseAuth.ts
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

import {
  onAuthStateChanged as _onAuthStateChanged,
  NextOrObserver,
  User,
  signOut
} from "firebase/auth";

export type FormattedUser = User & {
  uid: string;
  email: string | null;
  role?: string
};

const formatAuthUser = (user: User): FormattedUser => ({
  ...user,
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<FormattedUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const authStateChanged = async (authState: User | null) => {
    setLoading(true);
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

const setAuthUserInfo = (userInfo: Partial<FormattedUser>) => {
  setAuthUser((prev) => {
    if (!prev) return userInfo as FormattedUser; // cast safely if no previous user
    return { ...prev, ...userInfo };
  });
};

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setAuthUser(null); // optional, as authStateChanged will run on signOut
    setLoading(false);
  };

  const onAuthStateChanged = (cb: NextOrObserver<User>) => {
    // console.log(auth, "===auth&cb=====")
    return _onAuthStateChanged(auth, cb);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    logout,
    setAuthUserInfo
  };
}
