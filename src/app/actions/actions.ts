import { collection, getDocs, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { database } from "@/utils/firebaseConfig";
import { ReviewType, VendorType } from "../../utils/types";
import { formatDate } from "@/utils/functions";

export const fetchFeaturedReviews = async () => {
  console.log("🚀 Fetching featured reviews...");

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

export const fetchAllVendors = async () => {
    console.log("🚀 Fetching all vendors...");

  let result: VendorType[] = [], error = null;
  try {
    const postsCollectionRef = collection(database, "vendors");
     const querySnapshot = await getDocs(postsCollectionRef);

     // Map through the documents and extract data
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-expect-error
      result = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
       console.log("result in all Vendors:", result);

  } catch (e) {
    console.log("Error result in all Vendors", e);
    error = e;
  }

  return { result, error };
};

export const updateRating = async (vendorId: string, newRating: number) => {
  console.log("🚀 inside updateRating..");

  try {
    const vendorRef = doc(database, "vendors", vendorId);

    // Step 1: Get the current rating info
    const vendorSnap = await getDoc(vendorRef);

    if (!vendorSnap.exists()) {
      throw new Error("Vendor not found");
    }

    const data = vendorSnap.data();
    const currentCount: number = data.rating || 0;
    const currentAverage: number = data.averageRating || 0;

    // Step 2: Calculate new values
    const totalRating = currentAverage * currentCount;
    const newCount = currentCount + 1;
    const newAverage = (totalRating + newRating) / newCount;

    // Step 3: Update Firestore
    await updateDoc(vendorRef, {
      rating: newCount,
      averageRating: parseFloat(newAverage.toFixed(2))
    });

    console.log("✅ Rating updated successfully");

  } catch (e) {
    console.error("❌ Error in updateRating:", e);
  }
};

export const createReview = async (review: ReviewType) => {
    try {
      await setDoc(doc(database, "reviews"), {
        createdAt: formatDate(new Date()),
        rating: review.rating,
        reviewerId: review.reviewerId,
        vendorId: review.vendorId,
        description: review.description
      });
      console.log("Review saved to Firestore!");
    } catch (error) {
      console.error("Error saving review:", error);
      throw error;
    }
}
