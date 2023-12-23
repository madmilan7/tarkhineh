import React, { useState } from "react";

// Images
import footer from "../assets/images/Footer.png";
// Icons
import telegram from "../assets/icons/Footer icons(1).svg";
import instagram from "../assets/icons/Footer icons(2).svg";
import twiter from "../assets/icons/Footer icons.svg";
// Function
import { toPersian } from "../utils/toPersian";

const Footer = () => {
  const maxi: number = 200;
  const [text, setText] = useState<string>("");

  const handleTextChange = (e: any) => {
    const value = e.target.value;
    if (value.length <= maxi) {
      setText(value);
    }
  };

  return (
    <div className="relative">
      <div>
        <img className="absolute w-full h-80" src={footer} alt="footer" />
      </div>
      {/* content */}
      <div className="absolute text-white flex w-full">
        <div className="flex items-start gap-56 pr-32 pt-8 w-1/2">
          <div>
            <h2 className="text-2xl pb-1.5">دسترسی آسان</h2>
            <ul className="text-gray_3">
              <li className="py-2.5 px-4">پرسش‌های متداول</li>
              <li className="py-2.5 px-4">قوانین ترخینه</li>
              <li className="py-2.5 px-4">حریم خصوصی</li>
            </ul>
            <div className="flex items-center gap-5 px-4 pt-2">
              <img src={twiter} alt="توییتر" />
              <img src={instagram} alt="اینستاگرام" />
              <img src={telegram} alt="تلگرام" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl pb-1.5">شعبه‌های ترخینه</h2>
            <ul className="text-gray_3">
              <li className="py-2.5 px-4">شعبه اکباتان</li>
              <li className="py-2.5 px-4">شعبه چالوس</li>
              <li className="py-2.5 px-4">شعبه اقدسیه</li>
              <li className="py-2.5 px-4">شعبه ونک</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 pt-8 pr-4">
          <h2 className="text-2xl">پیام به ترخینه</h2>
          <div className="flex gap-6">
            <div className="flex flex-col gap-3 py-4 pr-3">
              <input
                type="text"
                className="bg-transparent border border-gray_7 rounded placeholder:text-gray_1
                            px-4 py-2 w-72 placeholder:text-sm"
                placeholder="نام و نام خانوادگی"
              />
              <input
                type="text"
                className="bg-transparent border border-gray_7 rounded placeholder:text-gray_1
                            px-4 py-2 w-72 placeholder:text-sm"
                placeholder="شماره تماس"
              />
              <input
                type="text"
                className="bg-transparent border border-gray_7 rounded placeholder:text-gray_1
                            px-4 py-2 w-72 placeholder:text-sm "
                placeholder="آدرس ایمیل (اختیاری)"
              />
            </div>
            <div className="py-4">
              <textarea
                className="bg-transparent border border-gray_7 rounded placeholder:text-gray_1 resize-none
                            px-4 pt-3 w-80 h-full placeholder:text-sm placeholder:absolute placeholder:top-3"
                placeholder="پیام شما"
                onChange={handleTextChange}
                value={text}
              />
              <div className="text-xs text-gray_1 text-end">
                {toPersian(text.length)}/۲۰۰
              </div>
            </div>
          </div>
          <button
            className="text-gray_1 border border-gray_7 rounded px-16 py-2
                                flex mr-auto ml-add mt-3 hover:border-2"
          >
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
