import React from "react";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import HeroSidebar from "./HeroSidebar";
import HeroFeature from "./HeroFeature";

const Hero = () => (
  <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap gap-5">
        {/* Carousel */}
        <div className="xl:max-w-[757px] w-full relative z-1 rounded-[10px] bg-white overflow-hidden">
          <Image
            src="/images/hero/hero-bg.png"
            alt="hero bg shapes"
            className="absolute right-0 bottom-0 -z-1"
            width={534}
            height={520}
          />
          <HeroCarousel />
        </div>

        {/* Sidebar */}
        <HeroSidebar />
      </div>
    </div>

    {/* Hero Features */}
    <HeroFeature />
  </section>
);

export default Hero;
