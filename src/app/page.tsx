import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedReviews from "@/components/home/FeaturedReviews";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";

// import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedReviews />
      <CategoriesSection />
      <Footer />
    </>
  )
}

export default HomePage;