import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Components
import Login from "./Login";

// icons
import logo from "../assets/icons/Logo.svg";
import search from "../assets/icons/search-normal.svg";
import user from "../assets/icons/user.svg";
import home from "../assets/icons/home.svg";
import menu from "../assets/icons/menu-board2.svg";
import branch from "../assets/icons/home-hashtag.svg";
import user2 from "../assets/icons/profile-2user.svg";
import call from "../assets/icons/call-calling.svg";

// Images
import topFrame from "../assets/images/top Frame.png";
import tarkhineh from "../assets/images/Logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    sessionStorage.getItem("selectedMenuItem" || "home")
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const pathName = location.pathname;
    selectedMenuItem !== "home" && setSelectedMenuItem(pathName.slice(1));
  }, [location.pathname]);

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
    sessionStorage.setItem("selectedMenuItem", menuItem);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between bg-white h-20 lg:h-24 px-6 lg:px-24 shadow-md">
      <div
        onClick={toggleMenu}
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm z-10 
                    ${isOpen ? "block" : "hidden"}`}
      ></div>
      {/* Burger */}
      <div
        className="flex flex-col lg:hidden gap-1 h-3 flex-[0.33]"
        onClick={toggleMenu}
      >
        <div className="bg-primary w-5 h-0.5"></div>
        <div className="bg-primary w-5 h-0.5"></div>
        <div className="bg-primary w-5 h-0.5"></div>
      </div>
      {/* logo */}
      <Link to="/">
        <img
          src={logo}
          alt="ترخینه"
          className="w-28 lg:w-40"
          onClick={() => handleMenuItemClick("home")}
        />
      </Link>
      {/* menu */}
      <div>
        <ul
          className={`flex flex-col lg:flex-row fixed h-screen lg:h-full bg-white top-0  
                      z-10 text-gray_7 text-sm lg:text-xl cursor-pointer w-72 lg:w-full lg:static
                      ${
                        isOpen ? "right-0" : "-right-full"
                      } transition-all duration-500 lg:transition-none`}
        >
          <div className="lg:hidden pb-2">
            <img
              src={topFrame}
              alt="topFrame"
              className="w-full brightness-[0.35] relative"
            />
            <img
              src={tarkhineh}
              alt="ترخینه"
              className="absolute top-10 right-4"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-4"
              onClick={toggleMenu}
            >
              <rect
                x="5.31348"
                y="7.41418"
                width="2"
                height="16"
                rx="1"
                transform="rotate(-45 5.31348 7.41418)"
                fill="white"
              />
              <rect
                x="16.3135"
                y="6"
                width="2"
                height="16"
                rx="1"
                transform="rotate(45 16.3135 6)"
                fill="white"
              />
            </svg>
          </div>
          {/*  */}
          <div className="border-b border-gray_4 lg:border-none mx-4">
            <li
              className={`lg:pb-1 py-2 flex items-center gap-2 ${
                selectedMenuItem === "home" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
              onClick={() => handleMenuItemClick("home")}
            >
              <img
                src={home}
                alt="home"
                className={`lg:hidden ${
                  selectedMenuItem === "home" ? "w-4" : "w-3"
                }`}
              />
              <Link to="/">صفحه اصلی</Link>
            </li>
          </div>
          <div
            className="flex items-center justify-between border-b border-gray_4 lg:border-none mx-4 gap-1 py-2"
            onClick={() => handleMenuItemClick("branch")}
          >
            <li
              className={`lg:pb-1 flex items-center gap-2 ${
                selectedMenuItem === "branch" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
            >
              <img
                src={branch}
                alt="branch"
                className={`lg:hidden ${
                  selectedMenuItem === "branch" ? "w-4" : "w-3"
                }`}
              />
              شعبه
            </li>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="16"
                height="16"
                transform="translate(0.5 0.5)"
                fill="white"
              />
              <path
                d="M8.49904 11.6999C8.03237 11.6999 7.5657 11.5199 7.21237 11.1666L2.8657 6.81993C2.67237 6.62659 2.67237 6.3066 2.8657 6.11326C3.05904 5.91993 3.37904 5.91993 3.57237 6.11326L7.91904 10.4599C8.23904 10.7799 8.75904 10.7799 9.07904 10.4599L13.4257 6.11326C13.619 5.91993 13.939 5.91993 14.1324 6.11326C14.3257 6.3066 14.3257 6.62659 14.1324 6.81993L9.7857 11.1666C9.43237 11.5199 8.9657 11.6999 8.49904 11.6999Z"
                fill={`${
                  selectedMenuItem === "branch" ? "#417F56" : "#717171"
                }`}
              />
            </svg>
          </div>
          <Link
            to="/menu"
            className="flex items-center justify-between mx-4 gap-1 border-gray_4 py-2"
            onClick={() => handleMenuItemClick("menu")}
          >
            <li
              className={`lg:pb-1 flex items-center gap-2 ${
                selectedMenuItem === "menu" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
            >
              <img
                src={menu}
                alt="menu"
                className={`lg:hidden ${
                  selectedMenuItem === "menu" ? "w-4" : "w-3"
                }`}
              />
              منو
            </li>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="16"
                height="16"
                transform="translate(0.5 0.5)"
                fill="white"
              />
              <path
                d="M8.49904 11.6999C8.03237 11.6999 7.5657 11.5199 7.21237 11.1666L2.8657 6.81993C2.67237 6.62659 2.67237 6.3066 2.8657 6.11326C3.05904 5.91993 3.37904 5.91993 3.57237 6.11326L7.91904 10.4599C8.23904 10.7799 8.75904 10.7799 9.07904 10.4599L13.4257 6.11326C13.619 5.91993 13.939 5.91993 14.1324 6.11326C14.3257 6.3066 14.3257 6.62659 14.1324 6.81993L9.7857 11.1666C9.43237 11.5199 8.9657 11.6999 8.49904 11.6999Z"
                fill={`${selectedMenuItem === "menu" ? "#417F56" : "#717171"}`}
              />
            </svg>
          </Link>
          <div className="border-b border-gray_4 lg:border-none mx-4">
            <li
              className={`hidden lg:block lg:pb-1 py-2 ${
                selectedMenuItem === "deputize" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
              onClick={() => handleMenuItemClick("deputize")}
            >
              اعطای نمایندگی
            </li>
          </div>
          <div className="border-b border-gray_4 lg:border-none mx-4">
            <li
              className={`flex items-center gap-2 lg:pb-1 py-2 ${
                selectedMenuItem === "aboutUs" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
              onClick={() => handleMenuItemClick("aboutUs")}
            >
              <img
                src={user2}
                alt="aboutUs"
                className={`lg:hidden ${
                  selectedMenuItem === "aboutUs" ? "w-4" : "w-3"
                }`}
              />
              درباره ما
            </li>
          </div>
          <div className="border-b border-gray_4 lg:border-none mx-4">
            <li
              className={`flex items-center gap-2 lg:pb-1 py-2 ${
                selectedMenuItem === "contactUs" &&
                "text-primary lg:border-b lg:border-primary font-semibold"
              }`}
              onClick={() => handleMenuItemClick("contactUs")}
            >
              <img
                src={call}
                alt="call"
                className={`lg:hidden ${
                  selectedMenuItem === "contactUs" ? "w-4" : "w-3"
                }`}
              />
              تماس با ما
            </li>
          </div>
        </ul>
      </div>
      {/* login & search & cart */}
      <div className="flex items-center gap-1.5">
        <img
          className="bg-tint_1 p-2 w-10 h-10 rounded cursor-pointer hidden lg:block"
          src={search}
          alt="جستجو"
        />
        <Link to="/cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`p-2 w-8 lg:w-10 h-8 lg:h-10 rounded cursor-pointer ${
              selectedMenuItem === "cart" ? "bg-primary" : "bg-tint_1"
            }`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleMenuItemClick("cart")}
          >
            <path
              d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
              fill={`${selectedMenuItem === "cart" ? "#E5F2E9" : "#417F56"}`}
            />
            <path
              d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
              fill={`${selectedMenuItem === "cart" ? "#E5F2E9" : "#417F56"}`}
            />
            <path
              d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
              fill={`${selectedMenuItem === "cart" ? "#E5F2E9" : "#417F56"}`}
            />
            <path
              d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
              fill={`${selectedMenuItem === "cart" ? "#E5F2E9" : "#417F56"}`}
            />
          </svg>
        </Link>
        <img
          className="bg-tint_1 p-2 w-8 lg:w-10 h-8 lg:h-10 rounded cursor-pointer"
          src={user}
          alt="ورود / ثبت نام"
          onClick={() => {
            setShowLogin(true);
          }}
        />
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Navbar;
