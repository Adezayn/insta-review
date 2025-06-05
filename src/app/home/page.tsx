
import FeedReviewGrid from "@/components/review/FeedReviewGrid";

const HomePage = () => {
  return (
       <main className="w-full bg-gray-50 overflow-y-auto">
         {/* <Navbar /> */}
          <div className="w-full">
              <FeedReviewGrid />
              
          </div>
        </main>
  );
}

export default HomePage;