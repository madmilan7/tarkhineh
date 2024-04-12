import React, { useState, useContext } from "react";

// Components
import AddressForm from "./AddressForm";
import AddressList from "../ui/AddressList";
// Icons
import truck from "../assets/icons/truck.svg";
import truckFast from "../assets/icons/truck-fast.svg";
import shoppingBag from "../assets/icons/shopping-bag.svg";
import location from "../assets/icons/location.svg";
import add from "../assets/icons/close-circle.svg";
import vector from "../assets/images/Vector.png";
import desc from "../assets/icons/document-normal.svg";
import trash from "../assets/icons/trash.svg";
import warning from "../assets/icons/warning-2.svg";
import tick from "../assets/icons/tick-circle.svg";
// Function
import {
  calculateTotalDiscount,
  calculateTotalPrice,
} from "../utils/functions";
import { toPersian } from "../utils/toPersian";
// Context
import { CartContext } from "../context/CartProvider";

interface stepType {
  onNextStep: () => void;
}
interface Address {
  addressTitle: string;
  phoneNumber: string;
  address: string;
}

const CheckOutInformation: React.FC<stepType> = ({ onNextStep }) => {
  const { cart, setCart } = useContext(CartContext);
  const [text, setText] = useState<string>("");
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("courier");

  const handleTextChange = (e: any) => {
    const maxi: number = 200;
    const value = e.target.value;
    if (value.length <= maxi) {
      setText(value);
    }
  };

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
  const addAddress = () => {
    setShowAddress(true);
  };
  const handleSubmit = (formData: Address) => {
    const newAddress: Address = { ...formData };
    let updateAddresses: Address[];
    if (editIndex !== null) {
      updateAddresses = addresses.map((address, index) =>
        index === editIndex ? newAddress : address
      );
    } else {
      if (addresses.length < 2) {
        updateAddresses = [...addresses, newAddress];
      } else {
        updateAddresses = [...addresses.slice(1), newAddress];
      }
    }
    setAddresses(updateAddresses);
    setEditIndex(null);
    setShowAddress(false);
  };
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowAddress(true);
  };
  const handleDelete = (index: number) => {
    const updatedAddresses = addresses.filter((_, idx) => idx !== index);
    setAddresses(updatedAddresses);
  };

  return (
    <div>
      <div className="flex lg:hidden items-center justify-center py-7 relative">
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-6"
        >
          <path
            d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"
            fill="#353535"
          />
        </svg>
        <h3 className="font-bold text-lg">تکمیل اطلاعات</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:mx-24 mx-6 pb-14">
        {/* Right side */}
        <div className="flex flex-col lg:w-7/12 w-full shrink-0 gap-6">
          {/* Shipping Method */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between border border-gray_4 
                          rounded-lg px-6 lg:px-10 py-3 lg:py-7">
            <div className="flex items-center gap-2 border-b border-gray_4 lg:border-none py-3 lg:p-0">
              <img src={truck} alt="روش ارسال" className="w-5 lg:w-7" />
              <p className="text-gray_8">روش تحویل سفارش</p>
            </div>
            <form action="shipping-method" className="lg:flex items-center gap-16">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="shipping-method"
                  id="courier"
                  checked={selectedOption === "courier"}
                  onClick={() => setSelectedOption("courier")}
                  className="w-4 h-4 appearance-none rounded-full border border-gray_4 checked:bg-success_light
                            bg-clip-content checked:p-px cursor-pointer"
                />
                <label htmlFor="courier" className="text-sm lg:text-base text-gray_7 leading-8">
                  ارسال توسط پیک{" "}
                  <span className="hidden lg:block text-xs">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </label>
                <img src={truckFast} alt="پیک" className="w-5 lg:w-7" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="shipping-method"
                  id="inPerson"
                  checked={selectedOption === "inPerson"}
                  onClick={() => setSelectedOption("inPerson")}
                  className="w-4 h-4 appearance-none rounded-full border border-gray_4 checked:bg-success_light
                             bg-clip-content checked:p-px cursor-pointer"
                />
                <label htmlFor="inPerson" className="text-sm lg:text-base text-gray_7 leading-8">
                  تحویل حضوری{" "}
                  <span className="hidden lg:block text-xs">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </label>
                <img src={shoppingBag} alt="حضوری" className="w-5 lg:w-7" />
              </div>
            </form>
          </div>
          {/* Addresses */}
          <div className="border border-gray_4 rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between mx-6 py-3 border-b border-gray_4">
              <div className="flex items-center gap-1">
                <img src={location} alt="آدرس‌ها" className="w-5 lg:w-7" />
                <h3 className="text-gray_8 lg:text-lg">آدرس‌ها</h3>
              </div>
              <button
                className="text-sm text-primary flex items-center"
                onClick={addAddress}
              >
                <img src={add} alt="افزودن ادرس" />
                افزودن آدرس
              </button>
            </div>
            {/* Content */}
            {addresses.length === 0 ? (
              <div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <p
                      className="text-gray_6 m-0 absolute top-1/2 left-1/2 whitespace-nowrap text-center
                              -translate-x-1/2 -translate-y-1/2 text-sm lg:text-base"
                    >
                      شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
                    </p>
                    <img
                      src={vector}
                      alt="خالی"
                      className="w-40 opacity-40 py-3"
                    />
                  </div>
                </div>
                {showAddress && (
                  <AddressForm
                    onSubmit={handleSubmit}
                    setShowAddress={setShowAddress}
                  />
                )}
              </div>
            ) : (
              <div>
                <AddressList
                  addresses={addresses}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
                {showAddress && (
                  <AddressForm
                    onSubmit={handleSubmit}
                    setShowAddress={setShowAddress}
                    initialData={
                      editIndex !== null ? addresses[editIndex] : undefined
                    }
                  />
                )}
              </div>
            )}
          </div>
          {/* Description */}
          <div className="flex border border-gray_4 rounded-lg relative h-44">
            <div className="flex items-center gap-1 absolute right-6 top-4">
              <img src={desc} alt="توضیحات" className="w-5 lg:w-7" />
              <p className="text-gray_7 lg:text-lg">
                توضیحات سفارش<span className="text-xs lg:text-sm"> (اختیاری)</span>
              </p>
            </div>
            <textarea
              className="w-full h-full outline-none rounded-lg pr-60 resize-none pt-4"
              onChange={handleTextChange}
              value={text}
            />
            <div className="hidden lg:block text-xs text-gray_4 text-end absolute -bottom-5 left-0">
              {toPersian(text.length)}/۲۰۰
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="border border-gray_4 rounded-lg w-full px-6 pt-2 pb-6">
          <div className="hidden lg:flex items-center justify-between border-b border-gray_4 py-3">
            <p className="text-gray_8 text-lg font-semibold">
              سبد خرید ({toPersian(cart.length)})
            </p>
            <img src={trash} alt="removeAll" />
          </div>
          <div
            className="hidden lg:block border-b border-gray_4 py-3 max-h-56 overflow-y-scroll scrollbar"
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
          <button
            className="bg-primary flex items-center justify-center gap-2 
                      text-white text-lg rounded w-full py-2"
            onClick={onNextStep}
          >
            <img className="w-7" src={tick} alt="ثبت سفارش" />
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutInformation;
