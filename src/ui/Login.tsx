import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Icons
import logo from "../assets/icons/Logo.svg";
import close from "../assets/icons/Close icon.svg";
import error from "../assets/icons/info-circle.svg";
import right from "../assets/icons/arrow-right2.svg";
// Components
import OtpInput from "./OtpInput";
// Function
import { toPersian } from "../utils/toPersian";

interface Input {
  number: number;
}

interface ShowLogin {
  setShowLogin: any;
}

const Login: React.FC<ShowLogin> = ({ setShowLogin }) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [number, setNumber] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = () => {
    setShowConfirm(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const comeBack = () => {
    setShowConfirm(false);
  };

  return (
    <div className="absolute top-0 right-0">
      <div className="bg-opacity-60 backdrop-blur-sm bg-black w-full h-full fixed top-0 z-10"></div>
      {/* Login 1 */}
      <div
        className="bg-white flex flex-col items-center z-20 fixed top-0 bottom-0 right-0 left-0 
                        m-auto h-20rem w-26rem border border-gray_4 rounded-lg px-6 py-6"
      >
        <img src={logo} alt="ترخینه" className="w-28" />
        <img
          src={close}
          alt="بستن"
          className="absolute left-6 cursor-pointer"
          onClick={closeLogin}
        />
        <h3 className="text-lg text-gray_8 pt-5">ورود / ثبت ‌نام</h3>
        <p className="text-sm text-gray_7 pt-1">
          با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="number"
          className="pt-6 relative"
        >
          <label
            htmlFor="number"
            className={`text-sm  ${
              errors.number ? `text-error` : `text-gray_8`
            } absolute top-3 right-4 bg-white px-1`}
          >
            شماره همراه
          </label>
          <input
            type="number"
            className={`border  ${
              errors.number ? `border-error` : `border-gray_8`
            } w-22rem h-10 rounded px-1 outline-none`}
            {...register("number", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /(09)\d{9}/,
            })}
            aria-invalid={errors.number ? "true" : "false"}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && (
            <p
              role="alert"
              className="text-xs text-error flex items-center gap-1 pt-2"
            >
              <i>
                <img src={error} alt="خطا" />
              </i>
              شماره صحیح نمی باشد!
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2 rounded text-lg mt-4 bg-primary text-white"
          >
            ادامه
          </button>
        </form>
        <p className="text-xs text-gray_8 pt-5">
          ورود و عضویت در ترخینه به منزله قبول{" "}
          <span className="text-primary cursor-pointer">قوانین و مقررات</span>{" "}
          است.
        </p>
      </div>
      {/* Login 2 */}
      {showConfirm && (
        <div
          className="bg-white z-20 fixed top-0 bottom-0 right-0 left-0
                        m-auto h-20rem w-26rem border border-gray_4 rounded-lg px-6 py-6"
        >
          <div>
            <img
              className="absolute right-6 top-6 cursor-pointer"
              src={right}
              alt="بازگشت"
              onClick={comeBack}
            />
            <img className="w-28 mx-auto" src={logo} alt="ترخینه" />
            <img
              className="absolute left-6 top-6 cursor-pointer"
              src={close}
              alt="بستن"
              onClick={closeLogin}
            />
          </div>
          <h3 className="text-lg text-gray_8 pt-5 text-center">کد تایید</h3>
          <p className="text-sm text-gray_7 pt-1 text-center pb-6">
            کد تایید پنج‌رقمی به شماره {"۰" + toPersian(+number)} ارسال شد.
          </p>
          <OtpInput setShowLogin={setShowLogin} valueLength={5} />
        </div>
      )}
    </div>
  );
};

export default Login;
