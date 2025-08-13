"use client"
import ReviewsPerVendor from "@/components/review/ReviewsPerVendor";
import { useAppSelector } from "@/redux/hooks";


const ReviewsPage = () => {
  const {userId} = useAppSelector(state => state.auth)
  // console.log(result, "====id===")
  return (
    <div>
       <div className="">
         <ReviewsPerVendor vendorId={userId} />
       </div> 
    </div>
  );
}

export default ReviewsPage;