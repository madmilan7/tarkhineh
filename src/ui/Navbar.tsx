import React, { useState } from "react";

// icons
import logo from "../assets/icons/Logo.svg";
import search from "../assets/icons/search-normal.svg";
import user from "../assets/icons/user.svg";
import cart from "../assets/icons/shopping-cart.svg";
import arrow from "../assets/icons/arrow-down.svg";
import Login from "./Login";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between bg-white h-24 mx-24">
      {/* logo */}
      <div>
        <img src={logo} alt="ترخینه" />
      </div>
      {/* menu */}
      <div>
        <ul className="flex text-gray_7">
          <li className="px-3">صفحه اصلی</li>
          <div className="flex px-3">
            <li>شعبه</li>
            <img src={arrow} alt="more" />
          </div>
          <div className="flex px-3">
            <li>منو</li>
            <img src={arrow} alt="more" />
          </div>
          <li className="px-3">اعطای نمایندگی</li>
          <li className="px-3">درباره ما</li>
          <li className="px-3">تماس با ما</li>
        </ul>
      </div>
      {/* login & search & cart */}
      <div>
        <div className="flex items-center gap-1.5">
          <img
            className="bg-tint_1 p-2 w-10 h-10 rounded"
            src={search}
            alt="جستجو"
          />
          <img
            className="bg-tint_1 p-2 w-10 h-10 rounded cursor-pointer"
            src={cart}
            alt="سبدخرید"
          />
          <img
            className="bg-tint_1 p-2 w-10 h-10 rounded cursor-pointer"
            src={user}
            alt="ورود / ثبت نام"
            onClick={() => {setShowLogin(true)}}
          />
        </div>
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Navbar;
