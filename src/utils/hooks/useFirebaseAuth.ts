// lib/useFirebaseAuth.ts
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

import {
  onAuthStateChanged as _onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";

export type FormattedUser = {
  uid: string;
  email: string | null;
  role?: string
};

const formatAuthUser = (user: User): FormattedUser => ({
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

  const onAuthStateChanged = (cb: NextOrObserver<User>) => {
    return _onAuthStateChanged(auth, cb);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
