// lib/useFirebaseAuth.jsx
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

import { onAuthStateChanged as _onAuthStateChanged, NextOrObserver, User } from "firebase/auth";

const formatAuthUser = (user: { uid: string; email: string; }) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

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
