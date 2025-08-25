
"use client";
import { useEffect, useState } from "react";
import FeedReview from "./FeedReview";
import EmptyList from '../global/EmptyList';
import { fetchReviewsByVendor } from '@/app/actions/actions';
import { ReviewType } from "@/utils/types";
import LoadingContainer from "../global/LoadingContainer";

const ReviewsPerVendor = ({ vendorId }: { vendorId: string }) => {
   const [reviews, setReviews] = useState<ReviewType[]>([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState<boolean>(false);
   useEffect(() => {
    const fetchData = async () => {
     try{
        setLoading(true);
        const {result} =  await fetchReviewsByVendor(vendorId);
         setReviews(result)
     }catch(err){
      // @ts-expect-error "the error does not have a defined path"
      setError(err)
     }finally{
      setLoading(false);
     }
    };
    fetchData();
  }, []);

    if (loading) return <LoadingContainer />;
    if (error) return <p>failed...try again</p>;
    if (reviews.length === 0) return <EmptyList />;
    return( <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
       {reviews?.map((review) => {
         return (
           <FeedReview key={review.id} {...review} />
         );
       })}
     </div>
    );
};

export default ReviewsPerVendor;