import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ClientReviewCard from "../components/ClientReviewCard";

const ClientReview = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-center text-2xl font-bold">Client Reviews.</h1>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[15rem]"
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
      </Swiper>
    </div>
  );
};

export default ClientReview;

// autoplay={{
//   delay: 2500,
//   disableOnInteraction: false,
// }}
