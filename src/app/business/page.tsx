'use client'
import AverageRatingOverTimeCard from "@/components/business/AverageRatingOverTimeCard";
import AveragingRatingBreakdown from "@/components/business/AveragingRatingBreakdown";
import Metrics from "@/components/business/Metrics";
import ReviewsOverTimeCard from "@/components/business/ReviewsOverTimeCard";
import { useEffect } from "react";
import { getVendorDetails } from "../actions/actions";
import { updateVendor } from "@/redux/vendorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


const BusinessPage = () => {
  const { userId } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const handleVendorsFetch = async () => {
      const resultInfo = await getVendorDetails(userId);
      dispatch(updateVendor(resultInfo.result))
  }
  useEffect(()=>{
    console.log('useeffect', userId)
     handleVendorsFetch()
  },[])
  return (
    <div>
       {/* <Metrics /> */}
       <AveragingRatingBreakdown />
       <div className="flex flex-col lg:flex-row gap-8">
          <ReviewsOverTimeCard />
          <AverageRatingOverTimeCard />
          <div>
            
          </div>
       </div> 
    </div>
  );
}

export default BusinessPage;