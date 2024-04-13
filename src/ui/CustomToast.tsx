import React, { useEffect } from "react";

// Icons
import error from "../assets/icons/Close-icon-red.svg";

interface PropsType {
  showToast: boolean;
  setShowToast: (active: boolean) => void;
}

const CustomToast: React.FC<PropsType> = ({ showToast, setShowToast }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [setShowToast])

  return (
    <div className={`bg-error_extralight p-3 rounded absolute bottom-2 shadow-md
                    left-0 right-0 mx-auto w-fit
                    ${showToast ? 'visible': 'invisible'}`}>
      <div className="flex items-center gap-4">
        <p className="font-semibold text-error">کد تایید نامعتبر!</p>
        <img
          src={error}
          alt="error"
          className="border-2 border-error rounded-full p-0.5"
        />
      </div>
    </div>
  );
};

export default CustomToast;
