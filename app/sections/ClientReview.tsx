"use client";

import { useEffect, useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ClientReviewCard from "../components/ClientReviewCard";

const ClientReview = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1025);

  useEffect(() => {
    const windowX = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowX);
    return () => {
      window.removeEventListener("resize", windowX);
    };
  }, []);

  let whichWidth: string = "";
  let whichOne: number = 0;
  switch (true) {
    case windowWidth > 1024:
      whichOne = 3;
      whichWidth = "w-full";
      break;
    case windowWidth > 768:
      whichOne = 2;
      whichWidth = "w-[35rem]";
      break;
    default:
      whichOne = 1;
      whichWidth = "w-[15rem]";
      break;
  }

  return (
    <div className="flex flex-col gap-4 mt-8 w-[75%] md:w-[768px] mx-auto">
      <h1 className="text-center text-3xl font-bold">Client Reviews.</h1>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        slidesPerView={whichOne}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={whichWidth}
      >
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientReview;
