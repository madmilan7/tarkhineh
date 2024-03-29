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
        <div
          className="border border-gray_4 rounded-lg flex flex-col items-center justify-center
                      text-center mx-24 mb-12"
        >
          <div className="absolute pt-24 z-10">
            <p className="text-xl text-gray_6 pb-12">
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>
            <Link
              to="/menu"
              className="text-primary bg-white border border-primary rounded px-11 py-2"
            >
              منوی رستوران
            </Link>
          </div>
          <img src={vector} alt="vector" className="py-16 opacity-50" />
        </div>
      )}
      {currentStep === 1 && cart.length > 0 && <CartContent onNextStep={handleNextStep} />}
      {currentStep === 2 && cart.length > 0 && <CheckOutInformation onNextStep={handleNextStep} />}
      {currentStep === 3 && cart.length > 0 && <PaymentInformation />}
      <Footer />
    </div>
  );
};

export default Cart;
