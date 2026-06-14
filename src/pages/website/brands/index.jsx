import BrandTrustSection from "./features/BrandTrustSection";
import BrandsHeroSection from "./features/BrandsHeroSection";
import BrandsStatsSection from "./features/BrandsStatsSection";
import FeaturedPartnerSection from "./features/FeaturedPartnerSection";
import SpecializedCategoriesSection from "./features/SpecializedCategoriesSection";
import StrategicPartnersSection from "./features/StrategicPartnersSection";

const BrandsPage = () => {
  return (
    <main className="bg-black text-white">
      <BrandsHeroSection />
      <BrandsStatsSection />
      <StrategicPartnersSection />
      <FeaturedPartnerSection />
      <SpecializedCategoriesSection />
      <BrandTrustSection />
    </main>
  );
};

export default BrandsPage;
