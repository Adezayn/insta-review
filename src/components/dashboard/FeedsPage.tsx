import { fetchFeaturedReviews } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import FeedReviewGrid from "../review/FeedReviewGrid";


const FeedsPage = async () => {
  const {result, error} = await fetchFeaturedReviews();
  if (error) return <p>failed...try again</p>;
  if (result.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      {/* <SectionTitle text="recent activity" /> */}
      <FeedReviewGrid reviews={result} />
    </section>
  );
}

export default FeedsPage