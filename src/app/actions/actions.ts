import { collection, getDocs, doc, getDoc, updateDoc, addDoc, query, where, orderBy, limit } from "firebase/firestore";
import { database } from "@/utils/firebaseConfig";
import { CreateReviewType, ReviewResponseType, ReviewType, User, VendorType } from "../../utils/types";

export const fetchFeaturedReviews = async () => {
  console.log("🚀 Fetching featured reviews...");

  let result: ReviewType[] = [], error = null;

  try {
    const reviewsQuery = query(
        collection(database, "reviews"),      // your collection name
        orderBy("createdAt", "desc"),   // sort by date, newest first
    );
    const reviewsSnapshot = await getDocs(reviewsQuery);

    const reviewsData = await Promise.all(
      reviewsSnapshot.docs.map(async (reviewDoc) => {
        const review = {
          ...(reviewDoc.data() as ReviewResponseType),
          id: reviewDoc.id
        };

        const reviewerRef = doc(database, "users", review.reviewerId);
        const vendorRef = doc(database, "vendors", review.vendorId);

        const [reviewerSnap, vendorSnap] = await Promise.all([
          getDoc(reviewerRef),
          getDoc(vendorRef)
        ]);

        const reviewer = reviewerSnap.exists() ? reviewerSnap.data() : {};
        const vendor = vendorSnap.exists() ? vendorSnap.data() : {};

        return {
          ...review,
          createdAt: review.createdAt.toDate(),
          reviewerName: reviewer.name || 'Unknown Reviewer',
          vendorName: vendor.name || 'Unknown Vendor'
        };
      })
    );

    result = reviewsData;
    console.log("✅ Enriched Reviews:", result);
  } catch (e) {
    console.error("❌ Error fetching enriched reviews:", e);
    error = e;
  }

  return { result, error };
};

export const fetchLatestSixFeaturedReviews = async () => {
  console.log("🚀 Fetching featured reviews...");

  let result: ReviewType[] = [], error = null;

  try {
    const reviewsQuery = query(
        collection(database, "reviews"),      // your collection name
        orderBy("createdAt", "desc"),   // sort by date, newest first
        limit(9)                        // get only first 6 results
      );
    const reviewsSnapshot = await getDocs(reviewsQuery);

    const reviewsData = await Promise.all(
      reviewsSnapshot.docs.map(async (reviewDoc) => {
        const review = {
          ...(reviewDoc.data() as ReviewResponseType),
          id: reviewDoc.id
        };

        const reviewerRef = doc(database, "users", review.reviewerId);
        const vendorRef = doc(database, "vendors", review.vendorId);

        const [reviewerSnap, vendorSnap] = await Promise.all([
          getDoc(reviewerRef),
          getDoc(vendorRef)
        ]);

        const reviewer = reviewerSnap.exists() ? reviewerSnap.data() : {};
        const vendor = vendorSnap.exists() ? vendorSnap.data() : {};

        return {
          ...review,
          createdAt: review.createdAt.toDate(),
          reviewerName: reviewer.name || 'Unknown Reviewer',
          vendorName: vendor.name || 'Unknown Vendor'
        };
      })
    );

    result = reviewsData;
    console.log("✅ Enriched Reviews:", result);
  } catch (e) {
    console.error("❌ Error fetching enriched reviews:", e);
    error = e;
  }

  return { result, error };
};

export const fetchAllVendors = async () => {
    console.log("🚀 Fetching all vendors...");

  let result: VendorType[] = [], error = null;
  try {
        const vendorsQuery = query(
        collection(database, "vendors"),      // your collection name
        orderBy("totalRating", "desc"),   // sort by rating, highest numbers of ratings first
      );
     const querySnapshot = await getDocs(vendorsQuery);

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

export const fetchReviewsByVendor = async (vendorId: string) => {
  console.log(`🚀 Fetching reviews for vendor ${vendorId}...`);

  let result: ReviewType[] = [], error = null;

  try {
    const reviewsQuery = query(
      collection(database, "reviews"),
      where("vendorId", "==", vendorId)
    );

    const reviewsSnapshot = await getDocs(reviewsQuery);

    const reviewsData = await Promise.all(
      reviewsSnapshot.docs.map(async (reviewDoc) => {
        const review = {
          ...(reviewDoc.data() as ReviewResponseType),
          id: reviewDoc.id
        };

        const reviewerRef = doc(database, "users", review.reviewerId);
        const reviewerSnap = await getDoc(reviewerRef);
        const reviewer = reviewerSnap.exists() ? reviewerSnap.data() : {};

        return {
          ...review,
          createdAt: review.createdAt.toDate(),
          reviewerName: reviewer.name || 'Unknown Reviewer'
        };
      })
    );

    result = reviewsData;
    console.log("✅ Reviews for vendor:", result);
  } catch (e) {
    console.error("❌ Error fetching reviews for vendor:", e);
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
    const currentCount: number = data.totalRating || 0;
    const currentAverage: number = data.averageRating || 0;
    const currentBreakdown: Record<string, number> = data.ratingsCount || {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0
    };

    // Step 2: Calculate new values
    const totalRating = currentAverage * currentCount;
    const newCount = currentCount + 1;
    const newAverage = (totalRating + newRating) / newCount;

    // Step 3: Update breakdown
    const newBreakdown = { ...currentBreakdown };
    newBreakdown[newRating] = (newBreakdown[newRating] || 0) + 1;

    // Step 4: Update Firestore
    await updateDoc(vendorRef, {
      totalRating: newCount,
      averageRating: parseFloat(newAverage.toFixed(2)),
      ratingsCount: newBreakdown
    });

    console.log("✅ Rating updated successfully");

  } catch (e) {
    console.error("❌ Error in updateRating:", e);
  }
};

export const createReview = async (review: CreateReviewType) => {
    try {
      await addDoc(collection(database, "reviews"), {
        createdAt: new Date(),
        reviewerId: review.reviewerId,
        vendorId: review.vendorId,
        comment: review.comment,
        rating: review.rating,
        imageUrl: review?.imageUrl
      });
      console.log("Review saved to Firestore!");
    } catch (error) {
      console.error("Error saving review:", error);
      throw error;
    }
};

export const getVendorDetails = async (id: string) => {
  console.log("🚀 Fetching vendor details...");

  let result: VendorType | null = null;
  let error = null;

  try {
    const vendorRef = doc(database, "vendors", id);
    const docSnap = await getDoc(vendorRef);

    if (docSnap.exists()) {
      result = { id: docSnap.id, ...docSnap.data() } as VendorType;
      console.log("✅ Vendor found:", result);
    } else {
      console.log("❌ No vendor found with that ID.");
    }

  } catch (e) {
    console.log("🔥 Error fetching vendor:", e);
    error = e;
  }

  return { result, error };
};

export const getReviewerDetails = async (id: string) => {
  console.log("🚀 Fetching reviewer details...");

  let result: User | null = null;
  let error = null;

  try {
    const vendorRef = doc(database, "users", id);
    const docSnap = await getDoc(vendorRef);

    if (docSnap.exists()) {
      result = { uid: docSnap.id, ...docSnap.data() } as User;
      console.log("✅ User found:", result);
    } else {
      console.log("❌ No reviewer found with that ID.");
    }

  } catch (e) {
    console.log("🔥 Error fetching reviewer:", e);
    error = e;
  }

  return { result, error };
};