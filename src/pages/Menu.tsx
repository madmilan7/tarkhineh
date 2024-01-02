import React, { useEffect, useState, useRef } from "react";

// Components
import PersianFood from "../components/PersianFood";
import ForeignFood from "../components/ForeignFood";
import Pizzas from "../components/Pizzas";
import Sandwiches from "../components/Sandwiches";
import Navbar from "../ui/Navbar";
import Slider from "../components/Slider";
import Footer from "../ui/Footer";
// Icons
import arrowLeft from "../assets/icons/arrow-left.svg";
import search from "../assets/icons/search.svg";

const Menu = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowButton(scrollRef.current.scrollLeft !== 0);
      }
    };

    scrollRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 140;
    }
  };
  const toRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 140;
    }
  };

  return (
    <div>
      <Navbar />
      <Slider />
      {/* Tab */}
      <div>
        <ul className="flex items-center gap-10 text-2xl text-gray_7 bg-gray_3 py-6 px-44">
          <li className="cursor-pointer">غذای اصلی</li>
          <li className="cursor-pointer">پیش غذا</li>
          <li className="cursor-pointer">دسر</li>
          <li className="cursor-pointer">نوشیدنی</li>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-1 mt-4 relative">
        <div
          ref={scrollRef}
          className="flex items-center flex-1.5 justify-between overflow-x-auto no-scrollbar gap-2 mr-40 scroll-smooth"
        >
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            {showButton && (
              <button
                onClick={toRight}
                className="bg-gray_1 p-1.5 rounded absolute top-1.5 right-36 z-10"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8805 27.56C11.6271 27.56 11.3738 27.4667 11.1738 27.2667C10.7871 26.88 10.7871 26.24 11.1738 25.8534L19.8671 17.16C20.5071 16.52 20.5071 15.48 19.8671 14.84L11.1738 6.14669C10.7871 5.76003 10.7871 5.12003 11.1738 4.73336C11.5605 4.34669 12.2005 4.34669 12.5871 4.73336L21.2805 13.4267C21.9605 14.1067 22.3471 15.0267 22.3471 16C22.3471 16.9734 21.9738 17.8934 21.2805 18.5734L12.5871 27.2667C12.3871 27.4534 12.1338 27.56 11.8805 27.56Z"
                    fill="#757575"
                  />
                </svg>
              </button>
            )}
            <p className="text-lg text-gray_8 whitespace-nowrap">
              غذاهای ایرانی
            </p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            <p className="text-lg text-gray_8 whitespace-nowrap">
              غذاهای غیر ایرانی
            </p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            <p className="text-lg text-gray_8">پیتزاها</p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            <p className="text-lg text-gray_8">ساندویچ‌ها</p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            <p className="text-lg text-gray_8">پرفروش‌ترین</p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div className="bg-gray_3 rounded-3xl px-2 py-1 flex flex-shrink-0 items-center gap-1 cursor-pointer">
            <p className="text-lg text-gray_8">اقتصادی‌ترین</p>
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
        </div>
        {/* search */}
        <div className="ml-44 flex-1 relative">
          <button
            onClick={toLeft}
            className="bg-gray_1 p-1.5 rounded absolute top-1.5 -right-4 z-10"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z"
                fill="#757575"
              />
            </svg>
          </button>
          <input
            type="text"
            className="outline-none border w-full h-10 border-gray_4 rounded-lg
                        placeholder:text-xs placeholder:text-gray_8 px-5 placeholder:font-semibold"
            placeholder="جستجو"
          />
          <img src={search} alt="search" className="absolute left-4 top-2" />
        </div>
      </div>
      <div className="mx-44">
        <PersianFood />
        <ForeignFood />
        <Pizzas />
        <Sandwiches />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
