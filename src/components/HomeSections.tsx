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

const HomeSections = () => {
  return (
    <div>
      {/* Restaurant menu */}
      <div>
        <h1 className="text-center text-gray_8 text-3xl py-12">منوی رستوران</h1>
        <div className="flex items-center justify-center gap-6 mt-32 mb-20">
          <div className="bg-primary h-40 w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-10 mx-auto right-0 left-0"
              src={mainCourse}
              alt="غذای اصلی"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                                text-lg w-40 h-12 rounded-lg shadow-md"
            >
              غذای اصلی
            </button>
          </div>
          <div className="bg-primary h-40 w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-10 mx-auto right-0 left-0"
              src={appetizer}
              alt="پیش غذا"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                                text-lg w-40 h-12 rounded-lg shadow-md"
            >
              پیش غذا
            </button>
          </div>
          <div className="bg-primary h-40 w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-10 mx-auto right-0 left-0"
              src={dessert}
              alt="دسر"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                                text-lg w-40 h-12 rounded-lg shadow-md"
            >
              دسر
            </button>
          </div>
          <div className="bg-primary h-40 w-72 rounded-lg shadow-2xl relative">
            <img
              className="absolute bottom-16 mx-auto right-0 left-0"
              src={drink}
              alt="نوشیدنی"
            />
            <button
              className="absolute -bottom-6 mx-auto right-0 left-0 bg-gray_1 text-gray_8
                                text-lg w-40 h-12 rounded-lg shadow-md"
            >
              نوشیدنی
            </button>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="relative">
        <img className="w-full h-about" src={about} alt="about" />
        {/* right side */}
        <div className="absolute top-14 pr-32 pl-4 text-white w-1/2">
          <h2 className="text-3xl pb-6">رستوران‌های زنجیره‌ای ترخینه</h2>
          <p className="text-2xl leading-10 pb-3 text-justify">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <button className="flex items-center mr-auto text-lg border-2 rounded px-7 py-1.5">
            اطلاعات بیشتر
            <span>
              <img className="w-6 mr-3" src={arrow} alt="more" />
            </span>
          </button>
        </div>
        {/* left side */}
        <div className="absolute left-32 top-20 text-white text-xl">
          <div className="flex items-center gap-16">
            <div className="flex flex-col items-center">
              <img className="pb-3" src={user} alt="پرسنلی مجرب و حرفه‌ای" />
              <p>پرسنلی مجرب و حرفه‌ای</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="pb-3" src={diagram} alt="کیفیت بالای غذاها" />
              <p>کیفیت بالای غذاها</p>
            </div>
          </div>
          <div className="flex items-center gap-24 mt-16">
            <div className="flex flex-col items-center">
              <img className="pb-3" src={wifi} alt="محیطی دلنشین و آرام" />
              <p>محیطی دلنشین و آرام</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="pb-3" src={board} alt="منوی متنوع" />
              <p>منوی متنوع</p>
            </div>
          </div>
        </div>
      </div>
      {/* Branches */}
      <div className="my-14">
        <h1 className="text-center text-gray_8 text-3xl pb-7">ترخینه گردی</h1>
        <div className="flex items-center justify-center gap-6">
          <div
            className="flex flex-col items-center border border-gray_4 rounded-lg w-72 h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group"
          >
            <div className="relative w-full">
              <div className="invisible group-hover:visible">
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
                className="rounded-t-lg w-full group-hover:h-44 group-hover:object-cover"
                src={branch1}
                alt="شعبه اکباتان"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:bg-black group-hover:opacity-60"></div>
            </div>
            <h2 className="text-gray_8 text-xl pt-4">شعبه اکباتان</h2>
            <p className="text-gray_7 px-3 text-center font-semibold leading-6 py-3">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
            <button
              className="flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex flex-col items-center border border-gray_4 rounded-lg w-72 h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group"
          >
            <div className="relative w-full">
              <div className="invisible group-hover:visible">
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
                className="rounded-t-lg w-full group-hover:h-44 group-hover:object-cover"
                src={branch1}
                alt="شعبه چالوس"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black group-hover:opacity-60"></div>
            </div>
            <h2 className="text-gray_8 text-xl pt-4">شعبه چالوس</h2>
            <p className="text-gray_7 px-3 text-center font-semibold leading-6 py-3">
              چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
            </p>
            <button
              className="flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex flex-col items-center border border-gray_4 rounded-lg w-72 h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group"
          >
            <div className="relative w-full">
              <div className="invisible group-hover:visible">
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
                className="rounded-t-lg w-full group-hover:h-44 group-hover:object-cover"
                src={branch3}
                alt="شعبه اقدسیه"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black group-hover:opacity-60"></div>
            </div>
            <h2 className="text-gray_8 text-xl pt-4">شعبه اقدسیه</h2>
            <p className="text-gray_7 px-3 text-center font-semibold leading-6 py-3">
              خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
            </p>
            <button
              className="flex items-center text-shade_2 text-sm border border-shade_2 rounded
                                px-5 py-1.5"
            >
              صفحه شعبه
              <span>
                <img className="mr-1" src={arrowGreen} alt="more" />
              </span>
            </button>
          </div>
          <div
            className="flex flex-col items-center border border-gray_4 rounded-lg w-72 h-344 overflow-hidden
                          hover:border-primary hover:shadow-lg group"
          >
            <div className="relative w-full">
              <div className="invisible group-hover:visible">
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
                className="rounded-t-lg w-full group-hover:h-44 group-hover:object-cover"
                src={branch3}
                alt="شعبه ونک"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black group-hover:opacity-60"></div>
            </div>
            <h2 className="text-gray_8 text-xl pt-4">شعبه ونک</h2>
            <p className="text-gray_7 px-3 text-center font-semibold leading-6 py-3">
              میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
            </p>
            <button
              className="flex items-center text-shade_2 text-sm border border-shade_2 rounded
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
