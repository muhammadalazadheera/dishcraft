import React from "react";
import HeroSlider from "@/components/HomePage/HeroSlider";
import AboutSection from "@/components/HomePage/AboutSection";
import PopularDishes from "@/components/HomePage/PopularDishes";
import Call2Action from "@/components/HomePage/Call2Action";
import HomeLayout from "./HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="w-full md:w-[95%] mx-auto">
        <HeroSlider />
        <div className="my-20"></div>
        <AboutSection />
        <PopularDishes />
        <Call2Action />
      </div>
    </HomeLayout>
  );
}

export default HomePage;
