import React from "react";
import { useSwiper } from "swiper/react";
// Icons
import next from "../assets/icons/arrow-right.svg";
import prev from "../assets/icons/Left-Arrow.svg";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="absolute z-10 top-0 bottom-0 my-auto right-4 p-1"
        onClick={() => swiper.slideNext()}
      >
        <img src={next} alt="next" />
      </button>
      <button
        className="absolute z-10 top-0 bottom-0 my-auto left-4 p-1"
        onClick={() => swiper.slidePrev()}
      >
        <img src={prev} alt="prev" />
      </button>
    </div>
  );
};

export default SwiperButtons;
