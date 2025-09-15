"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    discount: "20%",
    title: "AI Writing Tool Subscription",
    description:
      "Boost your content creation with our smart AI writing assistant for blogs, ads, and social media.",
    image: "/images/hero/s-11.png",
    link: "#",
  },
  {
    id: 2,
    discount: "25%",
    title: "Premium Canva Templates Pack",
    description:
      "Get professionally designed templates for presentations, social media, and marketing materials.",
    image: "/images/hero/s-2.png",
    link: "#",
  },
  {
    id: 3,
    discount: "30%",
    title: "SEO Optimization Software",
    description:
      "Increase your website traffic and rank higher with our all-in-one SEO optimization tool.",
    image: "/images/hero/s-3.png",
    link: "#",
  },
  {
    id: 4,
    discount: "15%",
    title: "Online Marketing Course",
    description:
      "Learn digital marketing strategies and grow your business with expert-led online courses.",
    image: "/images/hero/s-4.png",
    link: "#",
  },
  {
    id: 5,
    discount: "40%",
    title: "SaaS Productivity Suite",
    description:
      "Manage your team, projects, and workflow efficiently with our cloud-based SaaS tools.",
    image: "/images/hero/s-22.png",
    link: "#",
  },
];

const HeroCarousel = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="hero-carousel"
  >
    {slidesData.map(({ id, discount, title, description, image, link }) => (
      <SwiperSlide key={id}>
        <div className="flex flex-col-reverse sm:flex-row items-center pt-6 sm:pt-0">
          {/* Left - Text */}
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="font-semibold text-heading-3 sm:text-heading-1 text-blue">{discount}</span>
              <span className="text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale<br />Off
              </span>
            </div>
            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href={link}>{title}</a>
            </h1>
            <p>{description}</p>
            <a
              href={link}
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 hover:bg-blue transition-all mt-10"
            >
              Shop Now
            </a>
          </div>

          {/* Right - Image */}
          <div>
            <Image src={image} alt={title} width={351} height={358} />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HeroCarousel;
