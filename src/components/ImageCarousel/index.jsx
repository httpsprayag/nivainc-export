"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, EffectCards } from "swiper/modules";
import { sliderImages } from "@/constants";
import Image from "next/image";

export const ImageCarousel = () => {
  return (
    <div className="w-full h-[280px] md:h-[550px] lg:h-[750px]">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, EffectCards,]}
        className="mySwiper"
      >
        {sliderImages?.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              className="object-contain"
              fill
              src={img.src}
              alt={img.src}
            />
          </SwiperSlide>
        ))}
        <Image src={"/assets/images/slider1.jpg"} fill alt="zdfa" />
      </Swiper>
    </div>
  );
};
