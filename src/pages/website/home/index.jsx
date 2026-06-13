import BrandPartners from "./features/BrandPartners";
import BrochureDownloads from "./features/BrochureDownloads";
import HomeHeroSection from "./features/HomeHeroSection";
import IndustrialProducts from "./features/IndustrialProducts";
import NikonikkosStandard from "./features/NikonikkosStandard";
import Solutions from "./features/Solutions";
import TestimonialsCarousel from "./features/TestimonialsCarousel";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <Solutions />
      <IndustrialProducts />
      <NikonikkosStandard />
      <BrandPartners />
      <BrochureDownloads />
      <TestimonialsCarousel />
    </>
  );
};

export default HomePage;
