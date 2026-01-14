import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { RecentAdmissions } from "@/components/sections/RecentAdmissions";
import { QuickFilters } from "@/components/sections/QuickFilters";
import { WhyStudyItaly } from "@/components/sections/WhyStudyItaly";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedUniversities } from "@/components/sections/FeaturedUniversities";
import { Resources } from "@/components/sections/Resources";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <RecentAdmissions />
        <QuickFilters />
        <WhyStudyItaly />
        <HowItWorks />
        <FeaturedUniversities />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
