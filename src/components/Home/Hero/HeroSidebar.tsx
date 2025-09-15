"use client";
import React from "react";
import Image from "next/image";

const sidebarItems = [
  {
    id: 1,
    title: "iPhone 14 Plus & 14 Pro Max",
    offerText: "limited time offer",
    price: "$699",
    oldPrice: "$999",
    image: "/images/hero/hero-02.png",
    link: "#",
  },
  {
    id: 2,
    title: "Wireless Headphone",
    offerText: "limited time offer",
    price: "$699",
    oldPrice: "$999",
    image: "/images/hero/hero-01.png",
    link: "#",
  },
 
];

function HeroSidebar() {
  return (
    <div className="xl:max-w-[393px] w-full">
      <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5"
          >
            <div className="flex items-center gap-14">
              {/* Left Content */}
              <div>
                <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                  <a href={item.link}>{item.title}</a>
                </h2>

                <div>
                  <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                    {item.offerText}
                  </p>
                  <span className="flex items-center gap-3">
                    <span className="font-medium text-heading-5 text-red">
                      {item.price}
                    </span>
                    <span className="font-medium text-2xl text-dark-4 line-through">
                      {item.oldPrice}
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={123}
                  height={161}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSidebar;
