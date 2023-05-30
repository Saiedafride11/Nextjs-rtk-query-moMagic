"use client";

import BestDeals from "./components/Home/BestDeals";
import Categories from "./components/Home/Categories";
import HeroSection from "./components/Home/HeroSection";
import NewArrivals from "./components/Home/NewArrivals";
import ProductByCategory from "./components/Home/ProductByCategory";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Categories/>
      <NewArrivals/>
      <ProductByCategory/>
      <BestDeals/>
    </main>
  );
}


