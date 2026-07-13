import Image from "next/image";

const Carouesl = () => {
  return (
    <div className=" w-full h-auto relative mb-3">
      <Image
        src={"/hero-section/hero-carosuel1.webp"}
        alt="Hero Carouesl"
        width="740"
        height="100"
        className=" top-0 lef-0 rounded-md"
      ></Image>
      <Image
        src={"/hero-section/hero-carosuel2.webp"}
        alt="Hero Carouesl"
        width="740"
        height="100"
        className="absolute top-0 lef-0 rounded-md"
      ></Image>
      <Image
        src={"/hero-section/hero-carosuel3.webp"}
        alt="Hero Carouesl"
        width="740"
        height="100"
        className="absolute top-0 lef-0 rounded-md"
      ></Image>
    </div>
  );
};

export default Carouesl;
