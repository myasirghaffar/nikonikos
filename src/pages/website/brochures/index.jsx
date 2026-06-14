import BrochuresHeroSection from "./features/BrochuresHeroSection";
import DocumentCategoriesSection from "./features/DocumentCategoriesSection";
import PopularDownloadsSection from "./features/PopularDownloadsSection";
import ResourceCenterSection from "./features/ResourceCenterSection";

const BrochuresPage = () => {
  return (
    <main className="bg-black text-white">
      <BrochuresHeroSection />
      <DocumentCategoriesSection />
      <ResourceCenterSection />
      <PopularDownloadsSection />
    </main>
  );
};

export default BrochuresPage;
