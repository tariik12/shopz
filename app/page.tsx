"use client"
import Hero from "./_home-components/Hero";
import FlashDeals from "./_home-components/FlashDeals";
import BrandCategories from "./_home-components/BrandCategories";
import ElectricDevice from "./_home-components/ElectricDevice";
import ApplicancesAccessories from "./_home-components/ApplicancesAccessories";
import ShopzIdentity from "./_home-components/ShopzIdentity";
import Search from "@/components/shared/navigation/_navigation-components/Search";

export default function Home() {
  return (
      <main >
      <Hero />
      <Search />
     <FlashDeals />
     <BrandCategories />
     <ElectricDevice />
     <ApplicancesAccessories />
     <ShopzIdentity />
      </main>
  
  );
}
