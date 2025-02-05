import { fetchFeaturedReviews } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import FeedReviewGrid from "../review/FeedReviewGrid";

const FeaturedReviews = async () => {
    const { result } = await fetchFeaturedReviews();
    if (result?.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="recent activity" />
      <FeedReviewGrid reviews={result}/>
    </section>
  );
};

export default FeaturedReviews;
