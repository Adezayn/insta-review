import EmptyList from "@/components/global/EmptyList";
import { fetchFeaturedReviews } from "../actions/actions";
import FeedReviewGrid from "@/components/review/FeedReviewGrid";

const FeedPage = async () => {
   const { result } = await fetchFeaturedReviews();
   if (result?.length === 0) return <EmptyList />;
  return (
    <section className="">
      <FeedReviewGrid reviews={result} />
    </section>
  );
};

export default FeedPage;