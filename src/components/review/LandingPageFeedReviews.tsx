
import FeedReview from "./FeedReview";
import EmptyList from '../global/EmptyList';
import { fetchLatestSixFeaturedReviews } from '@/app/actions/actions';

const LandingPageFeedReviews = async () => {
     const {result, error} =  await fetchLatestSixFeaturedReviews();
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

export default LandingPageFeedReviews;