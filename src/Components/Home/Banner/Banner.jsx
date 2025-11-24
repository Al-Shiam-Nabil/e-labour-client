"use client";

import Image from "next/image";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[600px]"
      >
        <SwiperSlide>
          <Image
            src="https://i.ibb.co/MDByP46n/photo-1589939705384-5185137a7f0f.jpg"
            alt="Picture of the author"
            width={1400}
            height={600}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://i.ibb.co/3yJhvhGc/b3.jpg"
            alt="Picture of the author"
            width={1400}
            height={600}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://i.ibb.co/jZvpjNHT/b2.jpg"
            alt="Picture of the author"
            width={1400}
            height={600}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
