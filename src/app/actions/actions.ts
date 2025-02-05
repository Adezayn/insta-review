import { collection, getDocs } from "firebase/firestore";
import { database } from "@/utils/firebaseConfig";
import { ReviewType } from "../../utils/types";

export const fetchFeaturedReviews = async () => {
  let result: ReviewType[] = [], error = null;
  try {
    const postsCollectionRef = collection(database, "review");
     const querySnapshot = await getDocs(postsCollectionRef);

     // Map through the documents and extract data
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-expect-error
      result = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
       console.log("result in Reviews details:", result);

  } catch (e) {
    console.log("Error result in Reviews details:", e);
    error = e;
  }

  return { result, error };
};

export const fetchAllVendors = async () => {};
