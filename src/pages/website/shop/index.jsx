import ContactMapSection from "../../../components/website/ContactMapSection";
import TestimonialsCarousel from "../../../components/website/TestimonialsCarousel";
import ShopHeroSection from "./features/ShopHeroSection";
import ShopProductsSection from "./features/ShopProductsSection";

const ShopPage = () => {
  return (
    <>
      <ShopHeroSection />
      <ShopProductsSection />
      <TestimonialsCarousel />
      <ContactMapSection />
    </>
  );
};

export default ShopPage;
