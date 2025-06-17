import AverageReviewOverTimeCard from "@/components/business/AverageRatingOverTimeCard";
import Metrics from "@/components/business/Metrics";
import ReviewsOverTimeCard from "@/components/business/ReviewsOverTimeCard";
import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedReviews from "@/components/home/FeaturedReviews";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";

// import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedReviews />
      </Suspense>
      <CategoriesSection />
      <Footer />
         {/* <Metrics />
          <div className="flex gap-8">
             <ReviewsOverTimeCard />
             <AverageReviewOverTimeCard />
          </div> */}
    </Container>
  );
}

export default HomePage;