import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, database } from "./firebaseConfig";
import { User } from "./types";

const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  let result = null, error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
  let result = null, error = null;
  try {
   result = await signInWithPopup(auth, provider);
   console.log("Google sign-in successful:", result);
  } catch (e) {
    console.error("Error with Google Sign-In:", error);
    error = e;
  }

  return { result, error };
}

export const signUp = async (email: string, password: string) => {
  let result = null, error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const saveUserDetails = async (user: User ) => {
  try {
    await setDoc(doc(database, "users", user.uid), {
      email: user.email,
      name: user.fullName,
    //   photoURL: user.photoURL,
      createdAt: new Date(),
    });
    console.log("User details saved to Firestore!");
  } catch (error) {
    console.error("Error saving user details:", error);
    throw error;
  }
};