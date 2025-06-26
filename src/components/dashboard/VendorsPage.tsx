import { fetchFeaturedReviews } from "@/app/actions/actions";
import EmptyList from "../global/EmptyList";
import FeedReviewGrid from "../review/FeedReviewGrid";

const VendorsPage = async () => {
   const { result } = await fetchFeaturedReviews();
   if (result?.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      {/* <SectionTitle text="recent activity" /> */}
      <FeedReviewGrid />
    </section>
  );
};

export default VendorsPage;
