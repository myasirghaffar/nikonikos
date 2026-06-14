import BrandPartners from "./features/BrandPartners";
import BrochureDownloads from "./features/BrochureDownloads";
import ContactMapSection from "../../../components/website/ContactMapSection";
import HomeHeroSection from "./features/HomeHeroSection";
import IndustrialProducts from "./features/IndustrialProducts";
import NikonikkosStandard from "./features/NikonikkosStandard";
import Solutions from "./features/Solutions";
import TestimonialsCarousel from "../../../components/website/TestimonialsCarousel";

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
      <ContactMapSection />
    </>
  );
};

export default HomePage;
