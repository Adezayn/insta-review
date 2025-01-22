import { app, database } from "@/utils/firebaseConfig";
import { User } from "@/utils/types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

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


export const saveUserDetails = async (user: User) => {
  try {
    await setDoc(doc(database, "users", user.uid), {
      email: user.email,
      name: user.name,
      //   photoURL: user.photoURL,
      createdAt: new Date(),
      role: user.role,
      instagramHandle: user.instagram,
      city: user.address.city,
      state: user.address.state,
      country: user.address.country
    });
    console.log("User details saved to Firestore!");
  } catch (error) {
    console.error("Error saving user details:", error);
    throw error;
  }
};

export const getUserDetails = async (id: string) => {
   let user = null,
     error = null;
  try {
   const result = await getDoc(doc(database, "users", id));
    console.log("User details get to Firestore!");
    if (result.exists()) {
      user = result.data()
    } else{
      user = null
    }
  } catch (e) {
    console.log("Error saving user details:", e);
     error = e;
  }

  return { user, error };
};