import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Icons
import discountShape from "../assets/icons/discount-shape.svg";
import wallet from "../assets/icons/wallet-3.svg";
import money from "../assets/icons/wallet-money.svg";
import pos from "../assets/icons/card-pos.svg";
import card from "../assets/icons/card.svg";
import trash from "../assets/icons/trash.svg";
// Images
import bank from "../assets/images/Bank.png";
import bank2 from "../assets/images/Bank-2.png";
import bank3 from "../assets/images/Bank-3.png";
// Function
import {
  calculateTotalDiscount,
  calculateTotalPrice,
} from "../utils/functions";
import { toPersian } from "../utils/toPersian";
// Context
import { CartContext } from "../context/CartProvider";

const PaymentInformation = () => {
  const { cart, setCart } = useContext(CartContext);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedOption, setSelectedOption] = useState<string>("courier");
  const banks: { id: number; src: string }[] = [
    { id: 1, src: bank },
    { id: 2, src: bank2 },
    { id: 3, src: bank3 },
  ];

  const totalDiscount = calculateTotalDiscount(cart);
  const totalPrice = calculateTotalPrice(cart);
  const totalPriceAfterDiscount = totalPrice - totalDiscount;

  const increase = (data: any) => {
    setCart(
      cart?.map((item: any) => {
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
  const decrease = (data: any) => {
    setCart(
      cart?.map((item: any) => {
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
  const removeFromCart = (data: any) => {
    const newCart: any = cart?.filter((item: any) => item.id !== data.id);
    setCart([...newCart]);
  };
  const handleImageClick = (id: any) => {
    setSelectedBank(id);
  };

  return (
    <div className="flex items-start gap-6 mx-24 pb-14">
      {/* Right side */}
      <div className="flex flex-col w-7/12 shrink-0 gap-6">
        {/* Discount code */}
        <div className="flex items-center gap-56 border border-gray_4 rounded-lg py-7 pr-6">
          <div className="flex items-center gap-2">
            <img src={discountShape} alt="کدتخفیف" />
            <p className="text-gray_8 text-lg">ثبت کد تخفیف</p>
          </div>
          <form action="discount-code" className="flex items-center gap-5">
            <input
              type="text"
              className="border border-gray_4 rounded h-11 w-80 placeholder:text-gray_7 
                        outline-none px-4 text-gray_7"
              placeholder="کد تخفیف"
            />
            <button className="text-white bg-primary px-6 rounded h-11">
              ثبت کد
            </button>
          </form>
        </div>
        {/* Peyment method */}
        <div className="flex items-center justify-between border border-gray_4 rounded-lg pr-6 pl-14 py-7">
          <div className="flex items-center gap-2">
            <img src={money} alt="روش پرداخت" />
            <p className="text-gray_8 text-lg">روش پرداخت</p>
          </div>
          <form action="shipping-method" className="flex items-center gap-16">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping-method"
                id="courier"
                checked={selectedOption === "courier"}
                onClick={() => setSelectedOption("courier")}
                className="w-4 h-4 appearance-none rounded-full border cursor-pointer
                          border-gray_4 checked:bg-success_light bg-clip-content checked:p-px"
              />
              <label htmlFor="courier" className="text-gray_7 leading-8">
                پرداخت اینترنتی
                <span className="block text-xs">
                  توسط پیک رستوران ارسال شود.
                </span>
              </label>
              <img src={pos} alt="پرداخت اینترنتی" />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping-method"
                id="inPerson"
                checked={selectedOption === "inPerson"}
                onClick={() => setSelectedOption("inPerson")}
                className="w-4 h-4 appearance-none rounded-full border cursor-pointer
                          border-gray_4 checked:bg-success_light bg-clip-content checked:p-px"
              />
              <label htmlFor="inPerson" className="text-gray_7 leading-8">
                پرداخت در محل
                <span className="block text-xs">
                  توسط پیک رستوران ارسال شود.
                </span>
              </label>
              <img src={wallet} alt="پرداخت در محل" />
            </div>
          </form>
        </div>
        {/* Payment gateway */}
        {selectedOption === "courier" ? (
          <div className="border border-gray_4 rounded-lg pr-6 py-6">
            <div className="flex items-center gap-2">
              <img src={card} alt="درگاه پرداخت" />
              <p className="text-lg text-gray_8">درگاه پرداخت</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              {banks.map((bank: any) => (
                <img
                  key={bank.id}
                  src={bank.src}
                  className={`border rounded cursor-pointer ${
                    selectedBank === bank.id
                      ? "border-primary shadow-bank"
                      : "grayscale border-gray_4"
                  }`}
                  onClick={() => handleImageClick(bank.id)}
                />
              ))}
            </div>
            <div className="text-center pt-2">
              <p className="text-gray_7 text-sm">
                پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.
              </p>
              <p className="text-gray_7 text-xs pt-1">
                (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-20 border border-gray_4 bg-gray_1 rounded-lg px-6 py-7">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z"
                  fill="#353535"
                />
                <path
                  d="M12 17.25C11.73 17.25 11.48 17.15 11.29 16.96C11.2 16.86 11.13 16.75 11.07 16.63C11.02 16.51 11 16.38 11 16.25C11 15.99 11.11 15.73 11.29 15.54C11.66 15.17 12.34 15.17 12.71 15.54C12.89 15.73 13 15.99 13 16.25C13 16.38 12.97 16.51 12.92 16.63C12.87 16.75 12.8 16.86 12.71 16.96C12.52 17.15 12.27 17.25 12 17.25Z"
                  fill="#353535"
                />
                <path
                  d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11017 18.8001C2.91017 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91017 5.90011 4.11017 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86017 6.5001C4.12017 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12017 17.0701 4.86017 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.1902 20.9301L19.1302 17.5001C19.8702 17.0701 20.3302 16.2801 20.3302 15.4201V8.58011C20.3302 7.73011 19.8702 6.9301 19.1302 6.5001L13.1902 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z"
                  fill="#353535"
                />
              </svg>
              <h3 className="text-gray_8 whitespace-nowrap text-lg">قابل توجه</h3>
            </div>
            <p className="text-gray_7 text-xs">
              هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
              تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
              درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر
              از همراهی شما.
            </p>
          </div>
        )}
      </div>
      {/* Left side */}
      <div className="border border-gray_4 rounded-lg w-full px-6 pt-2 pb-6">
        <div className="flex items-center justify-between border-b border-gray_4 py-3">
          <p className="text-gray_8 text-lg font-semibold">
            سبد خرید ({toPersian(cart.length)})
          </p>
          <img src={trash} alt="removeAll" />
        </div>
        <div
          className="border-b border-gray_4 py-3 max-h-56 overflow-y-scroll scrollbar"
          dir="ltr"
        >
          {cart?.map((product: any) => (
            <div
              key={product.id}
              className="flex items-center justify-between odd:bg-gray_1 even:bg-gray_3 p-2"
              dir="rtl"
            >
              <div>
                <h4 className="text-gray_8">{product.title}</h4>
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
            <p className="text-gray_7">{(25000).toLocaleString("fa")} تومان</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <p className="text-gray_8">مبلغ قابل پرداخت</p>
          <p className="text-primary">
            {totalPriceAfterDiscount.toLocaleString("fa")} تومان
          </p>
        </div>
        <Link to="/successfulPayment">
          <button
            className="bg-primary flex items-center justify-center gap-2 
                      text-white text-lg rounded w-full py-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H22C22.41 8.25 22.75 8.59 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z"
                fill="#fff"
              />
              <path
                d="M8 17.75H6C5.59 17.75 5.25 17.41 5.25 17C5.25 16.59 5.59 16.25 6 16.25H8C8.41 16.25 8.75 16.59 8.75 17C8.75 17.41 8.41 17.75 8 17.75Z"
                fill="#fff"
              />
              <path
                d="M14.5 17.75H10.5C10.09 17.75 9.75 17.41 9.75 17C9.75 16.59 10.09 16.25 10.5 16.25H14.5C14.91 16.25 15.25 16.59 15.25 17C15.25 17.41 14.91 17.75 14.5 17.75Z"
                fill="#fff"
              />
              <path
                d="M17.56 21.75H6.44C2.46 21.75 1.25 20.55 1.25 16.61V8.39C1.25 4.45 2.46 3.25 6.44 3.25H17.55C21.53 3.25 22.74 4.45 22.74 8.39V16.6C22.75 20.55 21.54 21.75 17.56 21.75ZM6.44 4.75C3.3 4.75 2.75 5.29 2.75 8.39V16.6C2.75 19.7 3.3 20.24 6.44 20.24H17.55C20.69 20.24 21.24 19.7 21.24 16.6V8.39C21.24 5.29 20.69 4.75 17.55 4.75H6.44Z"
                fill="#fff"
              />
            </svg>
            تایید و پرداخت
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentInformation;
