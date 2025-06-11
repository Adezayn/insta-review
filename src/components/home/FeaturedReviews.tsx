import { fetchFeaturedReviews } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import FeedReviewGrid from "../review/FeedReviewGrid";

const FeaturedReviews = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="recent activity" />
      <FeedReviewGrid />
    </section>
  );
};

export default FeaturedReviews;
