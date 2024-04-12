import React from "react";
// Images
import drink from "../assets/images/menu.png";
import dessert from "../assets/images/menu2.png";
import appetizer from "../assets/images/menu3.png";
import mainCourse from "../assets/images/menu4.png";
import about from "../assets/images/about.png";
import branch3 from "../assets/images/branch2.png";
import branch1 from "../assets/images/branch3.png";
// Icons
import arrow from "../assets/icons/Left-Arrow.svg";
import diagram from "../assets/icons/diagram.svg";
import wifi from "../assets/icons/home-wifi.svg";
import board from "../assets/icons/menu-board.svg";
import user from "../assets/icons/user2.svg";
import arrowGreen from "../assets/icons/arrow-left-green.svg";
import gallery from "../assets/icons/gallery.svg";
import search from "../assets/icons/search.svg";

const HomeSections = () => {
  return (
    <div>
      {/* Search */}
      <div className="px-6 pt-4 flex-1 relative lg:hidden">
        <input
          type="text"
          className="outline-none border w-full h-10 border-gray_4 rounded 
                        placeholder:text-xs placeholder:text-gray_8 px-5 placeholder:font-semibold"
          placeholder="جستجو"
        />
        <img
          src={search}
          alt="search"
          className="absolute left-12 top-6"
        />
      </div>
      {/* Restaurant menu */}
      <div>
        <h1 className="text-center text-gray_8 lg:text-3xl py-6 lg:py-12">
          منوی رستوران
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-28 lg:mt-40 mt-12 lg:mb-20 mb-14">
          <div className="bg-primary lg:h-40 h-24 w-40 lg:w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-3 lg:bottom-10 mx-auto right-0 left-0 w-36 lg:w-full"
              src={mainCourse}
              alt="غذای اصلی"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                          text-sm lg:text-lg lg:w-40 w-24 h-8 lg:h-12 rounded-lg shadow-md"
            >
              غذای اصلی
            </button>
          </div>
          <div className="bg-primary lg:h-40 h-24 w-40 lg:w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-3 lg:bottom-10 mx-auto right-0 left-0 w-36 lg:w-full"
              src={appetizer}
              alt="پیش غذا"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                          text-sm lg:text-lg lg:w-40 w-24 h-8 lg:h-12 rounded-lg shadow-md"
            >
              پیش غذا
            </button>
          </div>
          <div className="bg-primary lg:h-40 h-24 w-40 lg:w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-3 lg:bottom-10 mx-auto right-0 left-0 w-36 lg:w-full"
              src={dessert}
              alt="دسر"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                          text-sm lg:text-lg lg:w-40 w-24 h-8 lg:h-12 rounded-lg shadow-md"
            >
              دسر
            </button>
          </div>
          <div className="bg-primary lg:h-40 h-24 w-40 lg:w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-3 lg:bottom-10 mx-auto right-0 left-0 w-32 lg:w-full"
              src={drink}
              alt="نوشیدنی"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                          text-sm lg:text-lg lg:w-40 w-24 h-8 lg:h-12 rounded-lg shadow-md"
            >
              نوشیدنی
            </button>
          </div>
        </div>
      </div>
      {/* About */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center h-about 
                    lg:px-32 px-6 pt-5 lg:pt-12"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* right side */}
        <div className="text-white lg:w-1/2 h-full">
          <h6 className="text-xl lg:text-3xl pb-3 lg:pb-6">
            رستوران‌های زنجیره‌ای ترخینه
          </h6>
          <p className="text-xs lg:text-2xl leading-6 lg:leading-10 pb-3 text-justify">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <button className="flex items-center mr-auto lg:text-lg border-2 rounded px-7 py-1.5">
            اطلاعات بیشتر
            <span>
              <img className="w-5 lg:w-6 mr-3" src={arrow} alt="more" />
            </span>
          </button>
        </div>
        {/* left side */}
        <div className="text-white text-sm lg:text-xl h-full pt-4 lg:pt-9">
          <div className="flex items-center justify-between gap-16">
            <div className="flex flex-col items-center">
              <img
                className="w-7 lg:w-12 pb-3"
                src={user}
                alt="پرسنلی مجرب و حرفه‌ای"
              />
              <p>پرسنلی مجرب و حرفه‌ای</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-7 lg:w-12 pb-3"
                src={diagram}
                alt="کیفیت بالای غذاها"
              />
              <p>کیفیت بالای غذاها</p>
            </div>
          </div>
          <div className="flex items-center gap-24 mt-8 lg:mt-16">
            <div className="flex flex-col items-center">
              <img
                className="w-7 lg:w-12 pb-3"
                src={wifi}
                alt="محیطی دلنشین و آرام"
              />
              <p>محیطی دلنشین و آرام</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-7 lg:w-12 pb-3" src={board} alt="منوی متنوع" />
              <p>منوی متنوع</p>
            </div>
          </div>
        </div>
      </div>
      {/* Branches */}
      <div className="lg:my-14 my-7">
        <h1 className="text-center text-gray_8 lg:text-3xl lg:pb-7 pb-4">
          ترخینه گردی
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-6">
          <div
            className="flex lg:flex-col items-center border border-gray_4 rounded-lg lg:w-72 lg:h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group h-28 w-full"
          >
            <div className="relative lg:w-full">
              <div className="invisible lg:group-hover:visible">
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-14 h-14 bg-white opacity-20 rounded-full"
                ></div>
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-11 h-11 bg-white opacity-20 rounded-full"
                ></div>
                <img
                  className=" absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0"
                  src={gallery}
                  alt="گالری"
                />
              </div>
              <img
                className="lg:rounded-t-lg w-full lg:group-hover:h-44 lg:group-hover:object-cover"
                src={branch1}
                alt="شعبه اکباتان"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 lg:group-hover:bg-black lg:group-hover:opacity-60"></div>
            </div>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-gray_8 lg:text-xl pt-4">شعبه اکباتان</h2>
              <p className="text-gray_7 text-xs lg:text-base px-3 text-center font-semibold leading-6 py-3">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </p>
            </div>
            <button
              className="hidden lg:flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex lg:flex-col items-center border border-gray_4 rounded-lg lg:w-72 lg:h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group h-28 w-full"
          >
            <div className="relative lg:w-full">
              <div className="invisible lg:group-hover:visible">
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-14 h-14 bg-white opacity-20 rounded-full"
                ></div>
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-11 h-11 bg-white opacity-20 rounded-full"
                ></div>
                <img
                  className=" absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0"
                  src={gallery}
                  alt="گالری"
                />
              </div>
              <img
                className="rounded-t-lg w-full lg:group-hover:h-44 lg:group-hover:object-cover"
                src={branch1}
                alt="شعبه چالوس"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 lg:group-hover:bg-black lg:group-hover:opacity-60"></div>
            </div>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-gray_8 lg:text-xl pt-4">شعبه چالوس</h2>
              <p className="text-gray_7 text-xs lg:text-base px-3 text-center font-semibold leading-6 py-3">
                چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                میلانی
              </p>
            </div>
            <button
              className="hidden lg:flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex lg:flex-col items-center border border-gray_4 rounded-lg lg:w-72 lg:h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group h-28 w-full"
          >
            <div className="relative lg:w-full">
              <div className="invisible lg:group-hover:visible">
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-14 h-14 bg-white opacity-20 rounded-full"
                ></div>
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-11 h-11 bg-white opacity-20 rounded-full"
                ></div>
                <img
                  className=" absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0"
                  src={gallery}
                  alt="گالری"
                />
              </div>
              <img
                className="rounded-t-lg w-full lg:group-hover:h-44 lg:group-hover:object-cover"
                src={branch3}
                alt="شعبه اقدسیه"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 lg:group-hover:bg-black lg:group-hover:opacity-60"></div>
            </div>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-gray_8 lg:text-xl pt-4">شعبه اقدسیه</h2>
              <p className="text-gray_7 text-xs lg:text-base px-3 text-center font-semibold leading-6 py-3">
                خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
              </p>
            </div>
            <button
              className="hidden lg:flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex lg:flex-col items-center border border-gray_4 rounded-lg lg:w-72 lg:h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group h-28 w-full"
          >
            <div className="relative lg:w-full">
              <div className="invisible lg:group-hover:visible">
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-14 h-14 bg-white opacity-20 rounded-full"
                ></div>
                <div
                  className="absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0 w-11 h-11 bg-white opacity-20 rounded-full"
                ></div>
                <img
                  className=" absolute mx-auto left-0 right-0 items-center justify-center flex z-10
                              my-auto top-0 bottom-0"
                  src={gallery}
                  alt="گالری"
                />
              </div>
              <img
                className="rounded-t-lg lg:group-hover:h-44 w-full lg:group-hover:object-cover"
                src={branch3}
                alt="شعبه ونک"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 lg:group-hover:bg-black lg:group-hover:opacity-60"></div>
            </div>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-gray_8 lg:text-xl pt-4">شعبه ونک</h2>
              <p className="text-gray_7 text-xs lg:text-base px-3 text-center font-semibold leading-6 py-3">
                میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
              </p>
            </div>
            <button
              className="hidden lg:flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSections;
