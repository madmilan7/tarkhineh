import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import CartContent from "./CartContent";
import CheckOutInformation from "./CheckOutInformation";
import PaymentInformation from "./PaymentInformation";
import Progress from "./Progress";
// Images
import vector from "../assets/images/Vector.png";
import trash from "../assets/icons/trash.svg";
// Context
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <Navbar />
      {/* Progress */}
      <Progress currentStep={currentStep} />
      {/* Empty */}
      {cart.length === 0 && (
        <div>
          <div className="flex lg:hidden items-center justify-between py-7 px-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"
                fill="#353535"
              />
            </svg>
            <h3 className="font-bold text-lg">سبد خرید</h3>
            <img src={trash} alt="trash" className="w-4 opacity-25" />
          </div>
          <div
            className="border border-gray_4 rounded-lg flex flex-col items-center justify-center
                      text-center lg:mx-24 mx-6 mb-12"
          >
            <div className="absolute pt-14 lg:pt-24 z-10">
              <p className="text-sm lg:text-xl text-gray_6 pb-6 lg:pb-12">
                شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
              </p>
              <Link
                to="/menu"
                className="text-primary text-sm lg:text-base bg-white border border-primary rounded px-11 py-1 lg:py-2"
              >
                منوی رستوران
              </Link>
            </div>
            <img
              src={vector}
              alt="vector"
              className="py-24 lg:py-16 opacity-50 w-52 lg:w-80"
            />
          </div>
        </div>
      )}
      {currentStep === 1 && cart.length > 0 && (
        <CartContent onNextStep={handleNextStep} />
      )}
      {currentStep === 2 && cart.length > 0 && (
        <CheckOutInformation onNextStep={handleNextStep} />
      )}
      {currentStep === 3 && cart.length > 0 && <PaymentInformation />}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
