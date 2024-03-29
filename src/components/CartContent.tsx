import React, { useState, useContext } from "react";

// Components
import ShoppingCards from "../ui/ShoppingCards";
import Login from "../ui/Login";
// Function
import { calculateTotalDiscount, calculateTotalPrice } from "../utils/functions";
import { toPersian } from "../utils/toPersian";
// Images
import trash from "../assets/icons/trash.svg";
import warning from "../assets/icons/warning-2.svg";
import user from "../assets/icons/user2.svg";
import left from "../assets/icons/Left-Arrow.svg";
// Context
import { CartContext } from "../context/CartProvider";

interface stepType {
  onNextStep: () => void;
}

const CartContent: React.FC<stepType> = ({ onNextStep }) => {
  const { cart } = useContext(CartContext);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const totalDiscount = calculateTotalDiscount(cart);
  const totalPrice = calculateTotalPrice(cart);
  const totalPriceAfterDiscount = totalPrice - totalDiscount;
  
  return (
    <div>
      <div className="flex gap-6 mx-24">
        {/* Cards */}
        <div
          className="border border-gray_4 rounded-lg h-554 py-2 mb-12 w-7/12 shrink-0 overflow-y-scroll scrollbar"
          dir="ltr"
        >
          <ShoppingCards />
        </div>
        {/* Factor */}
        <div className="border border-gray_4 rounded-lg h-fit w-full px-6 pt-2 pb-6">
          <div className="flex items-center justify-between border-b border-gray_4 py-3">
            <p className="text-gray_8 text-lg font-semibold">
              سبد خرید ({toPersian(cart.length)})
            </p>
            <img src={trash} alt="removeAll" />
          </div>
          <div className="flex items-center justify-between border-b border-gray_4 py-3">
            <p className="text-gray_8">تخفیف محصولات</p>
            <p className="text-gray_7">
              {totalDiscount.toLocaleString("fa-IR")} تومان
            </p>
          </div>
          <div className="border-b border-gray_4 py-3">
            <div className="flex items-center justify-between">
              <p className="text-gray_8">هزینه ارسال</p>
              <p className="text-gray_7">{toPersian(0)} تومان</p>
            </div>
            <p className="text-xs text-warning flex items-center gap-2 py-2">
              <i>
                <img src={warning} alt="هشدار" />
              </i>
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-gray_8">مبلغ قابل پرداخت</p>
            <p className="text-primary">
              {totalPriceAfterDiscount.toLocaleString("fa")} تومان
            </p>
          </div>
          {isLoggedIn ? (
            <button
              className="bg-primary flex items-center justify-center gap-2 
                      text-white text-lg rounded w-full py-2"
              onClick={onNextStep}
            >
              تکمیل اطلاعات
              <img className="w-7" src={left} alt="تکمیل اطلاعات" />
            </button>
          ) : (
            <button
              className="bg-primary flex items-center justify-center gap-2 
                      text-white text-lg rounded w-full py-2"
              onClick={() => {
                setShowLogin(true);
              }}
            >
              <img className="w-7" src={user} alt="ثبت نام" />
              ورود/ثبت‌نام
            </button>
          )}
        </div>
      </div>
      {showLogin && (
        <Login setShowLogin={setShowLogin} loggedInCart={setIsLoggedIn} />
      )}
    </div>
  );
};

export default CartContent;
