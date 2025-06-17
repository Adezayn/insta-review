import AverageRatingOverTimeCard from "@/components/business/AverageRatingOverTimeCard";
import Metrics from "@/components/business/Metrics";
import ReviewsOverTimeCard from "@/components/business/ReviewsOverTimeCard";


const BusinessPage = () => {
  return (
    <div>
       <Metrics />
       <div className="flex gap-8">
          <ReviewsOverTimeCard />
          <AverageRatingOverTimeCard />
       </div> 
    </div>
  );
}

export default BusinessPage;