import React, { useState, useContext } from "react";

// Components
import ShoppingCards from "../ui/ShoppingCards";
import Login from "../ui/Login";
// Function
import {
  calculateTotalDiscount,
  calculateTotalPrice,
} from "../utils/functions";
import { toPersian } from "../utils/toPersian";
// Images
import trash from "../assets/icons/trash.svg";
import warning from "../assets/icons/warning-2.svg";
import user from "../assets/icons/user2.svg";
import left from "../assets/icons/Left-Arrow.svg";
// Context
import { CartContext } from "../context/CartProvider";
// Types
import { dataType } from "../@types/assets/types";

interface stepType {
  onNextStep: () => void;
}

const CartContent: React.FC<stepType> = ({ onNextStep }) => {
  const { cart, setCart } = useContext(CartContext);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [LoggedIn, setLoggedIn] = useState<boolean>(false);

  const totalDiscount = calculateTotalDiscount(cart);
  const totalPrice = calculateTotalPrice(cart);
  const totalPriceAfterDiscount = totalPrice - totalDiscount;

  const increase = (data: dataType) => {
    setCart(
      cart?.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };
  const decrease = (data: dataType) => {
    setCart(
      cart?.map((item) => {
        if (item.id === data.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  };
  const removeFromCart = (data: dataType) => {
    const newCart: any = cart?.filter((item) => item.id !== data.id);
    setCart([...newCart]);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 mx-6 lg:mx-24">
        {/* Cards */}
        <div
          className="hidden lg:block border border-gray_4 rounded-lg h-554 py-2 mb-12 w-7/12 shrink-0 overflow-y-scroll scrollbar"
          dir="ltr"
        >
          <ShoppingCards />
        </div>
        {/* Factor */}
        <div className="flex lg:hidden items-center justify-between pt-7">
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
          <img src={trash} alt="trash" className="w-4" />
        </div>
        <div className="border border-gray_4 rounded-lg h-fit w-full px-6 pt-2 pb-6">
          <div className="hidden lg:flex items-center justify-between border-b border-gray_4 py-3">
            <p className="text-gray_8 text-lg font-semibold">
              سبد خرید ({toPersian(cart.length)})
            </p>
            <img src={trash} alt="removeAll" />
          </div>
          {/* products in mobile */}
          <div
            className="lg:hidden border-b border-gray_4 py-3 max-h-56 overflow-y-scroll scrollbar"
            dir="ltr"
          >
            {cart?.map((product: any) => (
              <div
                key={product.id}
                className="flex items-center justify-between odd:bg-gray_1 even:bg-gray_3 p-2"
                dir="rtl"
              >
                <div>
                  <h4 className="text-gray_8 text-sm">{product.title}</h4>
                  <p className="text-gray_7 text-sm">
                    {(
                      product.price -
                      product.price * (product.discount / 100)
                    ).toLocaleString("fa")}{" "}
                    تومان
                  </p>
                </div>
                <div className="bg-tint_1 rounded flex items-center gap-2 px-2 py-1">
                  <button
                    className="text-primary text-xl"
                    onClick={() => increase(product)}
                  >
                    +
                  </button>
                  <span className="text-primary text-xl">
                    {toPersian(product.quantity)}
                  </span>
                  {product.quantity === 1 ? (
                    <button onClick={() => removeFromCart(product)}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z"
                          fill="#417F56"
                        />
                        <path
                          d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z"
                          fill="#417F56"
                        />
                        <path
                          d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z"
                          fill="#417F56"
                        />
                        <path
                          d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
                          fill="#417F56"
                        />
                        <path
                          d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                          fill="#417F56"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="text-primary text-xl"
                      onClick={() => decrease(product)}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
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
          {LoggedIn ? (
            <button
              className="bg-primary flex items-center justify-center gap-2 
                      text-white lg:text-lg rounded w-full py-2"
              onClick={onNextStep}
            >
              تکمیل اطلاعات
              <img className="w-5 lg:w-7" src={left} alt="تکمیل اطلاعات" />
            </button>
          ) : (
            <button
              className="bg-primary flex items-center justify-center gap-2 
                      text-white lg:text-lg rounded w-full py-2"
              onClick={() => {
                setShowLogin(true);
              }}
            >
              <img className="w-5 lg:w-7" src={user} alt="ثبت نام" />
              ورود/ثبت‌نام
            </button>
          )}
        </div>
      </div>
      {showLogin && (
        <Login setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default CartContent;
