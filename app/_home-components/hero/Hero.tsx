import HeroMiddle from "./hero-components/HeroMiddle";
import HeroRight from "./hero-components/HeroRight";
import Sidebar from "./hero-components/Sidebar";

const Hero = () => {
  return (
    <div>
      <div className="flex container mx-auto max-h-[65vh] gap-5 relative ">
        <Sidebar />

        <HeroMiddle />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
