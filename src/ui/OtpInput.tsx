import React, { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Function
import { toPersian } from "../utils/toPersian";
// Icons
import clock from "../assets/icons/clock.svg";
// Components
import CustomToast from "./CustomToast";

interface OtpType {
  password: string;
}
interface Prop {
  setShowLogin: any;
  valueLength: number;
  loggedIn: any;
}

const OtpInput: React.FC<Prop> = ({ setShowLogin, valueLength, loggedIn }) => {
  const [otp, setOtp] = useState<string[]>(new Array(valueLength).fill(""));
  const [seconds, setSeconds] = useState<number>(120);
  const otpInputs = useRef([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  const schema = yup.object().shape({
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<OtpType> = () => {
    setShowLogin(false);
    loggedIn(true);
  };

  useEffect(() => {
    otpInputs.current[0].focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(120);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSecond) => prevSecond - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTimer = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${toPersian(min)}:${sec < 10 ? `۰` : ``}${toPersian(sec)}`;
  };

  const edit = () => {
    if (otp[otp.length - 1] !== "") {
      const current = otp.length;
      otpInputs.current[current - 1].focus();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (newOtp.join("") !== "" && newOtp.join("").length == 5) {
      setValue("password", newOtp[index]);
    } else {
      setValue("password", "");
    }

    // Auto focus to the next input field if available
    if (value !== "" && index < valueLength - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpInputs.current[index - 1].focus();
    }
  };

  const showToastHandler = () => {
    if (errors) {
      setShowToast(true)
    }
  }

  return (
    <form action="confirm" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between" dir="ltr">
        {otp.map((_, index) => (
          <input
            {...register("password")}
            name="password"
            type="number"
            value={otp[index]}
            key={index}
            aria-invalid={errors.password ? "true" : "false"}
            onChange={(e) => {
              handleChange(e, index);
            }}
            ref={(input) => {
              otpInputs.current[index] = input;
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-14 h-10 border rounded text-center focus:border-primary outline-none
               ${errors.password ? `border-error` : `border-gray_7`}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <img src={clock} alt="تایمر" />
          <p className="text-sm text-gray_7">
            {formatTimer()} تا دریافت مجدد کد
          </p>
        </div>
        <p className="text-sm text-primary cursor-pointer" onClick={edit}>
          ویرایش شماره
        </p>
      </div>
      <button
        type="submit"
        className="w-full py-2 rounded text-lg mt-6 bg-primary text-white"
        onClick={showToastHandler}
      >
        ثبت
      </button>
      {showToast && (
        <CustomToast showToast={showToast} setShowToast={setShowToast} />
      )}
    </form>
  );
};

export default OtpInput;
