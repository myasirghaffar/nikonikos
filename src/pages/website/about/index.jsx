import AboutHeroSection from "./features/AboutHeroSection";
import AboutJourneySection from "./features/AboutJourneySection";
import AboutLegacySection from "./features/AboutLegacySection";
import AboutMissionVisionSection from "./features/AboutMissionVisionSection";
import AboutStatsSection from "./features/AboutStatsSection";
import AboutValuesSection from "./features/AboutValuesSection";
import AboutWhyChooseSection from "./features/AboutWhyChooseSection";

const AboutPage = () => {
  return (
    <main className="bg-black text-white">
      <AboutHeroSection />
      <AboutLegacySection />
      <AboutStatsSection />
      <AboutValuesSection />
      <AboutJourneySection />
      <AboutMissionVisionSection />
      <AboutWhyChooseSection />
    </main>
  );
};

export default AboutPage;
