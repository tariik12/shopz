"use client";
import Hero from "./_home-components/hero/Hero";
import FlashDeals from "./_home-components/FlashDeals";
import BrandCategories from "./_home-components/BrandCategories";
import ElectricDevice from "./_home-components/ElectricDevice";
import ApplicancesAccessories from "./_home-components/ApplicancesAccessories";
import ShopzIdentity from "./_home-components/ShopzIdentity";

export default function Home() {
  return (
    <main>
      <Hero />

      <FlashDeals />
      <BrandCategories />
      <ElectricDevice />
      <ApplicancesAccessories />
      <ShopzIdentity />
    </main>
  );
}
