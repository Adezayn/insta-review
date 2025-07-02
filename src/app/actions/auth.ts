import { app, database } from "@/utils/firebaseConfig";
import { User, Vendor } from "@/utils/types";
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

export const signInWithGoogle = async (role: string) => {
  const provider = new GoogleAuthProvider();
  let result = null, error = null;
  try {
    result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user document exists
    const userRef = doc(database, role, user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // Create new user document with default or fetched data
      await setDoc(userRef, {
        email: user.email,
        name: user.displayName || "",
        role: "user",  // or your default role
        createdAt: new Date(),
        instagramHandle: "",
        city: "",
        state: "",
        country: "",
      });
      console.log("Created new Firestore user document. Google sign-in successful");
    } else {
      console.log("User document already exists. Google sign-in successful");
    }
  } catch (e) {
    console.error("Error during Google Sign-In:", e);
    error = e;
  }

  return { result, error };
};


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

export const saveVendorsDetails = async (user: Vendor) => {
  try {
    await setDoc(doc(database, "vendors", user.uid), {
      email: user.email,
      name: user.name,
      //   photoURL: user.photoURL,
      createdAt: new Date(),
      role: user.role,
      instagramHandle: user.instagram,
      city: user.address.city,
      state: user.address.state,
      country: user.address.country,
      category: user.category,
      averageRating: 0,
      rating: 0
    });
    console.log("Vendors details saved to Firestore!");
  } catch (error) {
    console.error("Error saving vendors details:", error);
    throw error;
  }
};



export const getUserDetails = async (id: string, role: string) => {
   let user = null,
     error = null;
  try {
   const result = await getDoc(doc(database, role, id));
    console.log("User details get to Firestore!",id);
    if (result.exists()) {
      user = result.data()
        console.log("User details get to Firestore user!", user);
    } else{
       console.log("else info User details get to Firestore user!", user);
      user = null
    }
  } catch (e) {
    console.log("Error saving user details:", e);
     error = e;
  }

  return { user, error };
};

export const verifyInstagramHandle = async (handle: string) => {
  let result = null
    const response = await fetch(`https://www.instagram.com/${handle}/`, {
      method: 'HEAD',
    });

    if (response.status === 200) {
      console.log("Instagram user exists");
      result = 'success'
    } else if (response.status === 404) {
      console.log("User does not exist");
      result = 'failure'
    }

    return {result}
}
