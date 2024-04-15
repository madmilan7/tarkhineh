import React from "react";

// Components
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
// Images
import success from "../assets/images/Group.png";
import selebration from "../assets/images/Selebration.png";

const SuccessfulPayment = () => {
  return (
    <div>
      <Navbar />
      {/* Content */}
      <div className="flex flex-col items-center py-28 lg:py-12 gap-5 lg:gap-10 relative overflow-hidden">
        <img src={success} alt="پرداخت با موفقیت" className="w-40 lg:w-72" />
        <h3 className="lg:text-4xl font-bold text-primary">
          پرداخت شما با موفقیت انجام شد!
        </h3>
        <p className="text-primary text-sm lg:text-lg">کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹</p>
        <div className="flex items-center gap-3 px-3 pt-10 lg:p-0">
          <button className="border border-primary rounded text-sm lg:text-base text-primary w-48 py-1.5">
            بازگشت به صفحه اصلی
          </button>
          <button className="bg-primary text-sm lg:text-base text-white rounded w-48 py-1.5">
            پیگیری سفارش
          </button>
        </div>
        <img
          src={selebration}
          alt="selebration"
          className="absolute top-10 lg:-top-28 animate-uptodown2 lg:animate-uptodown scale-150 lg:scale-100"
        />
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default SuccessfulPayment;
