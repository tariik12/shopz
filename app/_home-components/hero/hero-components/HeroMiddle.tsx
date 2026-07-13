import Image from "next/image";
import Carouesl from "./Carosuel";

const HeroMiddle = () => {
  return (
    <div className="w-full ">
      {/* Hero middle */}

      <div className="w-full h-auto">
        {/* Carousel */}
        <Carouesl />
      </div>
      {/* Hero Right-left-bottom */}
      <div className="w-full h-auto flex gap-3 justify-center">
        <Image
          src={"/hero-section/hero-right-left-bottom-left.avif"}
          width={363}
          height={100}
          alt="Hero Right Image"
          className="rounded-md shadow"
        />
        <Image
          src={"/hero-section/hero-right-left-bottom-right.avif"}
          width={363}
          height={100}
          className="rounded-md shadow"
          alt="Hero Right Image"
        />
      </div>
    </div>
  );
};

export default HeroMiddle;
