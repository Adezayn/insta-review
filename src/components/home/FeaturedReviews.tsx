import { fetchFeaturedReviews } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ReviewsGrid from "../review/ReviewsGrid";

const FeaturedReviews = async () => {
  const reviews = await fetchFeaturedReviews();
  if (reviews.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="recent activity" />
      <ReviewsGrid reviews={reviews} />
    </section>
  );
};

export default FeaturedReviews;
