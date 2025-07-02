
import FeedReviewGrid from "@/components/review/FeedReviewGrid";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
      <div className="mx-6">
            <div className="w-1/3">
              <Input placeholder="search" />
            </div>
          <FeedReviewGrid />
      </div>
  );
}

export default HomePage;