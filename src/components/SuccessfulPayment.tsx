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
      <div className="flex flex-col items-center py-12 gap-10 relative overflow-hidden">
        <img src={success} alt="پرداخت با موفقیت" />
        <h3 className="text-4xl font-bold text-primary">
          پرداخت شما با موفقیت انجام شد!
        </h3>
        <p className="text-primary">کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹</p>
        <div className="flex items-center gap-3">
          <button className="border border-primary rounded text-primary w-48 py-1.5">
            بازگشت به صفحه اصلی
          </button>
          <button className="bg-primary text-white rounded w-48 py-1.5">
            پیگیری سفارش
          </button>
        </div>
        <img
          src={selebration}
          alt=""
          className="absolute -top-28 animate-uptodown"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SuccessfulPayment;
