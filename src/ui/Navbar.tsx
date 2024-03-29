import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-between bg-white h-24 px-24 shadow-md">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="ترخینه" />
      </Link>
      {/* menu */}
      <div>
        <ul className="flex text-gray_7 text-xl">
          <li className="px-3">صفحه اصلی</li>
          <div className="flex px-3 gap-1">
            <li>شعبه</li>
            <img src={arrow} alt="more" />
          </div>
          <Link to="/menu" className="flex px-3 gap-1">
            <li>منو</li>
            <img src={arrow} alt="more" />
          </Link>
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
          <Link to="/cart">
            <img
              className="bg-tint_1 p-2 w-10 h-10 rounded cursor-pointer"
              src={cart}
              alt="سبدخرید"
            />
          </Link>
          <img
            className="bg-tint_1 p-2 w-10 h-10 rounded cursor-pointer"
            src={user}
            alt="ورود / ثبت نام"
            onClick={() => {
              setShowLogin(true);
            }}
          />
        </div>
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} loggedInCart={null} />}
    </div>
  );
};

export default Navbar;
