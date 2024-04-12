import React, { useEffect, useState } from "react";

// Icons
import close from "../assets/icons/Close icon.svg";

interface Address {
  addressTitle: string;
  phoneNumber: string;
  address: string;
}
interface AddressFormProps {
  setShowAddress: (active: boolean) => void;
  onSubmit: (formData: Address) => void;
  initialData?: Address;
}

const AddressForm: React.FC<AddressFormProps> = ({
  setShowAddress,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    addressTitle: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLImageElement> | any) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      addressTitle: "",
      phoneNumber: "",
      address: "",
    });
    setShowAddress(false);
  };

  return (
    <div className="lg:absolute top-0 right-0">
      <div className="hidden lg:block bg-opacity-60 backdrop-blur-sm bg-black w-full h-full fixed top-0 z-10"></div>
      <div
        className="bg-white flex flex-col items-center z-20 fixed top-0 bottom-0 right-0 left-0 
                        m-auto lg:h-32rem lg:w-37.5rem lg:border border-gray_4 lg:rounded-lg overflow-hidden"
      >
        <div className="flex items-center justify-center lg:bg-gray_3 w-full py-7">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-6 lg:hidden"
            onClick={() => setShowAddress(false)}
          >
            <path
              d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"
              fill="#353535"
            />
          </svg>
          <h3 className="text-lg lg:text-2xl font-semibold text-gray_8">
            ثبت آدرس
          </h3>
          <img
            src={close}
            alt="بستن"
            className="hidden lg:block absolute left-6 cursor-pointer w-10"
            onClick={() => setShowAddress(false)}
          />
        </div>
        <form action="address" onSubmit={handleSubmit} className="w-full px-6">
          <input
            type="text"
            name="addressTitle"
            value={formData.addressTitle}
            onChange={handleInputChange}
            className="outline-none border border-gray_4 rounded w-full my-6 placeholder:text-gray_7 
                        px-4 py-2 placeholder:text-sm lg:placeholder:text-base"
            placeholder="عنوان آدرس"
          />

          <label
            htmlFor="receiver"
            className="text-gray_8 flex items-center gap-1 text-sm lg:text-base"
          >
            <input
              type="checkbox"
              name="receiver"
              id="receiver"
              className="w-4 h-4 before:content[''] peer relative rounded-sm text-primary border border-primary appearance-none
                        cursor-pointer transition-all checked:bg-primary checked:before:bg-primary"
            />
            <svg
              width="7"
              height="6"
              viewBox="0 0 7 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute text-white transition-opacity opacity-0 pointer-events-none 
                        peer-checked:opacity-100 translate-y-0 -translate-x-2/4"
            >
              <path
                d="M2.2475 5.9975C2.0575 5.9975 1.8675 5.9275 1.7175 5.7775L0.2175 4.2775C-0.0725 3.9875 -0.0725 3.5075 0.2175 3.2175C0.5075 2.9275 0.9875 2.9275 1.2775 3.2175L2.2475 4.1875L5.7175 0.7175C6.0075 0.4275 6.4875 0.4275 6.7775 0.7175C7.0675 1.0075 7.0675 1.4875 6.7775 1.7775L2.7775 5.7775C2.6275 5.9275 2.4375 5.9975 2.2475 5.9975Z"
                fill="#fff"
              />
            </svg>
            تحویل گیرنده خودم هستم
          </label>

          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="outline-none border border-gray_4 rounded w-full my-2 placeholder:text-gray_7 
                        px-4 py-2 placeholder:text-sm lg:placeholder:text-base"
            placeholder="شماره همراه"
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="outline-none border border-gray_4 rounded w-full h-44 my-2 placeholder:text-gray_7 px-4
                        resize-none py-2 placeholder:text-sm lg:placeholder:text-base"
            placeholder="آدرس دقیق شما"
          ></textarea>
          <div className="flex items-center justify-between gap-3">
            <button
              className="text-primary w-full py-2 text-sm lg:text-base"
              onClick={() => setShowAddress(false)}
            >
              انصراف
            </button>
            <button className="text-white bg-primary rounded w-full py-2 text-sm lg:text-base">
              ثبت آدرس
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
