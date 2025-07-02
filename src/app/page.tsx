
import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import CategoriesSection from "@/components/home/CategoriesSection";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/Navbar";
import LandingPageFeedReviews from "@/components/review/LandingPageFeedReviews";
import { Suspense } from "react";

// import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <LandingPageFeedReviews />
      </Suspense>
      <CategoriesSection />
    </Container>
  );
}

export default HomePage;