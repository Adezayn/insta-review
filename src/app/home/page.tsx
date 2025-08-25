
import NavSearch from "@/components/dashboard/NavSearch";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeedReviewGrid from "@/components/review/FeedReviewGrid";
import { Input } from "@/components/ui/input";
import { Suspense } from "react";

const HomePage = () => {
  return (
      <div className="mx-6">
            <div className="w-1/3">
              <NavSearch />
            </div>
            <Suspense fallback={<LoadingContainer />}>
              <FeedReviewGrid />
            </Suspense>
      </div>
  );
}

export default HomePage;