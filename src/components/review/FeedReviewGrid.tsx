
import FeedReview from "./FeedReview";
import EmptyList from '../global/EmptyList';
import { fetchFeaturedReviews } from '@/app/actions/actions';

const FeedReviewGrid = async () => {
     const {result, error} =  await fetchFeaturedReviews();
     if (error) return <p>failed...try again</p>;
    if (result.length === 0) return <EmptyList />;
    return( <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
       {result?.map((review) => {
         return (
           <FeedReview key={review.id} {...review} />
         );
       })}
     </div>
    );
};

export default FeedReviewGrid