"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[450px] relative">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/70">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white">
                  Indian Cuisine
                </h1>
                <p className="text-lg text-white mt-2">
                  A Symphony of Spices and Flavors
                </p>
                <button className="btn btn-outline btn-warning btn-l mt-2">Explore More</button>
              </div>
            </div>
            <img
              src="https://www.travellersofindia.com/wp-content/uploads/2021/11/Rajma_Chawal_Travellersofindia.com_.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[450px] relative">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/70">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white">
                  Chinese Cuisine
                </h1>
                <p className="text-lg text-white mt-2">
                  A Culinary Journey Through the Middle Kingdom
                </p>
                <button className="btn btn-outline btn-warning btn-l mt-2">Explore More</button>
              </div>
            </div>
            <img
              src="https://sun9-70.userapi.com/impf/piCvQAVvOl1Sf904wwQ-yEgJ2VtHL9UWiDlUqQ/r8lzbzx2Rrk.jpg?size=1920x768&quality=95&crop=0,194,1000,399&sign=54b7846a8023c80489de24abc8001d0f&type=cover_group"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[450px] relative">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/70">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white">
                  Japanese Cuisine
                </h1>
                <p className="text-lg text-white mt-2">
                  A Culinary Journey Through the Land of the Rising Sun
                </p>
                <button className="btn btn-outline btn-warning btn-l mt-2">Explore More</button>
              </div>
            </div>
            <img
              src="https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2024/07/kore-yemekleri.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
