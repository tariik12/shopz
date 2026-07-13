import Image from "next/image";

const HeroRight = () => {
  return (
    <div className="flex w-1/2 h-full items-center justify-between gap-2">
      {/* Hero Right-Right */}

      <div className="w-full h-full">
        <Image
          src={"/hero-section/hero-right-top.avif"}
          width={440}
          height={900}
          alt="Hero Right Image"
          className="rounded-md shadow"
        />
        <Image
          src={"/hero-section/hero-right-bottom.avif"}
          width={440}
          height={900}
          className="rounded-md mt-3 shadow"
          alt="Hero Right Image"
        />
      </div>
    </div>
  );
};

export default HeroRight;
