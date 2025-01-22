import { ReviewType } from "@/utils/types";
import FeedReview from "./FeedReview";

type Props = {
  reviews: ReviewType[]
}
const FeedReviewGrid = ({ reviews }: Props) => {
    return( <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
       {reviews.map((review) => {
         return (
           <FeedReview key={review.id} {...review} />
         );
       })}
     </div>
    );
};

export default FeedReviewGrid