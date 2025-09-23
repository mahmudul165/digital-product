// import React from "react";
// import Hero from "./Hero";
// import Categories from "./Categories";
// import NewArrival from "./NewArrivals";
// import PromoBanner from "./PromoBanner";
// import BestSeller from "./BestSeller";
// import CounDown from "./Countdown";
// import Testimonials from "./Testimonials";
// import Newsletter from "../Common/Newsletter";

// const Home = () => {
//   return (
//     <main>
//       <Hero />
//       <Categories />
//       <NewArrival />
//       <PromoBanner />
//       {/* <BestSeller /> */}
//       <CounDown />
//       <Testimonials />
//       <Newsletter />
//     </main>
//   );
// };

// export default Home;


"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

// Critical (above the fold) – load instantly
import Hero from "./Hero";
import Categories from "./Categories";

// Lazy-loaded (below the fold)
const NewArrival = dynamic(() => import("./NewArrivals"), { ssr: false });
const PromoBanner = dynamic(() => import("./PromoBanner"), { ssr: false });
// const BestSeller = dynamic(() => import("./BestSeller"), { ssr: false }); // Uncomment if needed
const CountDown = dynamic(() => import("./Countdown"), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false });
const Newsletter = dynamic(() => import("../Common/Newsletter"), { ssr: false });

const Home = () => {
  return (
    <main className="min-h-screen w-full">
      {/* Above the fold */}
      <section>
        <Hero />
      </section>
      <section>
        <Categories />
      </section>

      {/* Below the fold (lazy loaded) */}
      <section>
        <NewArrival />
      </section>
      <section>
        <PromoBanner />
      </section>
      {/* <section>
        <BestSeller />
      </section> */}
      <section>
        <CountDown />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Newsletter />
      </section>
    </main>
  );
};

export default memo(Home);
