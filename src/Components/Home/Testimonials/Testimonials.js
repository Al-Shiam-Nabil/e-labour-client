"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        Clients Feedback
      </h2>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.9,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {loading ? (
          <div className="w-full grid place-items-center py-20">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        ) : (
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl shadow-sm p-6 max-w-md border border-gray-100 ">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-secondary text-3xl mb-4" />

                  {/* Description */}
                  <p className="text-[#004F4A] font-semibold text-lg leading-relaxed">
                    {review?.review}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-300 my-5"></div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3">
                    {/* Profile Circle */}

                    {review?.user_photoURL && (
                      <Image
                        src={review?.user_photoURL}
                        alt="Picture of the author"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    )}

                    {/* Name & Role */}
                    <div>
                      <h3 className="font-semibold text-primary">
                        {review?.userName}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {review?.user_email}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Testimonials;
