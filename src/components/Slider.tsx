import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Components
import SwiperButtons from "./SwiperButtons";

// images
import slider from "../assets/images/Slider.png";
import paginationBg from "../assets/images/Rectangle 2.svg";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="relative"
      >
        <SwiperSlide>
          <img className="w-full" src={slider} alt="slider" />
          <div>
            <h1
              className=" text-tint_1 text-5xl font-bold absolute mx-auto right-0 left-0 text-center
                          flex items-center justify-center my-auto bottom-0 top-0"
            >
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h1>
            <button
              className="absolute text-white bg-primary px-9 py-2.5 rounded-lg text-lg
                              mx-auto right-0 left-0 bottom-16 w-fit"
            >
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider} alt="slider" />
          <div>
            <h1
              className=" text-tint_1 text-5xl font-bold absolute mx-auto right-0 left-0 text-center
                          flex items-center justify-center my-auto bottom-0 top-0"
            >
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h1>
            <button
              className="absolute text-white bg-primary px-9 py-2.5 rounded-lg text-lg
                              mx-auto right-0 left-0 bottom-16 w-fit"
            >
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider} alt="slider" />
          <div>
            <h1
              className=" text-tint_1 text-5xl font-bold absolute mx-auto right-0 left-0 text-center
                          flex items-center justify-center my-auto bottom-0 top-0"
            >
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h1>
            <button
              className="absolute text-white bg-primary px-9 py-2.5 rounded-lg text-lg
                              mx-auto right-0 left-0 bottom-16 w-fit"
            >
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
        {/* Navigation & Pagination */}
        <SwiperButtons />
        <img
          className="absolute bottom-0 z-10 mx-auto right-0 left-0"
          src={paginationBg}
          alt="white"
        />
      </Swiper>
    </div>
  );
};

export default Slider;
