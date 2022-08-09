import React, { useState } from "react";
import { MdOutlineAccountCircle, MdMenu } from "react-icons/md";
import {
  FaCaretDown,
  FaTimes,
  FaHistory,
  FaBell,
  FaCreditCard,
  FaUsers,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";

import { IoIosHome } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-2 md:px-0 py-10 md:py-[25px]">
          <img
            src="/Ileero-logo-concept-03.svg"
            alt=""
            className="h-[44px] w-[165px]"
          />
          {/* hidden on desktop */}
          <div
            className="inline-flex md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {menu ? (
              <FaTimes className="w-10 h-10" />
            ) : (
              <MdMenu className="w-10 h-10" />
            )}
          </div>

          {/*  */}
          <div className=" hidden md:flex justify-around items-centerx">
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              How it Works
            </a>
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Help
            </a>

            <div className="flex items-center justify-center divide-x relative">
              <a
                href="#"
                className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                FAQs
              </a>
              <button className="flex group items-center space-x-2 p-2 lg:px-3 md:mx-1 peer hover:bg-gray-100 hover:shadow-xl">
                <MdOutlineAccountCircle className="h-6 w-6" />
                <span>Account</span>
                <FaCaretDown className="h-6 w-6 group-hover:rotate-180" />
                {/* <FaCaretUp className="h-6 w-6 hidden group-hover:inline-block" /> */}
              </button>
              <div
                className="hidden peer-hover:flex hover:flex
         w-[420px] absolute top-[40px] right-0 p-5 
         flex-col bg-white drop-shadow-lg"
              >
                <p className="text-[#34344E] font-medium text-xl text-[24px] my-3 text-left">
                  Welcome to Ileero remit!
                </p>

                <div className="flex items-center justify-between ">
                  <div className="text-[16px] cursor-pointer bg-[#178CFC] rounded-lg flex items-center justify-center font-semibold text-white w-[180px] h-[48px]">
                    Create Account
                  </div>
                  <div className="text-[16px]  cursor-pointer bg-white border border-[#178CFC] rounded-lg flex items-center justify-center font-semibold text-[#1894F8] w-[180px] h-[48px]">
                    Get Started
                  </div>
                </div>

                <div className="flex  items-start justify-center space-y-3 flex-col my-3 border-y py-2">
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <IoIosHome className="w-6 h-6" />
                    <span className="text-left text-sm ">Dashboard</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <FaHistory className="w-6 h-6" />
                    <span className="text-left text-sm ">Transactions</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <AiOutlineUsergroupAdd className="w-6 h-6" />
                    <span className="text-left text-sm ">Beneficiaries</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <FaBell className="w-6 h-6" />
                    <span className="text-left text-sm ">Notification</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <FaCreditCard className="w-6 h-6" />
                    <span className="text-left text-sm ">Payments</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <FaUsers className="w-6 h-6" />
                    <span className="text-left text-sm ">Refer a Friend</span>
                  </div>
                  <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                    <FaCog className="w-6 h-6" />
                    <span className="text-left text-sm ">Settings</span>
                  </div>
                </div>

                <div className="flex space-x-3 items-center text-[#A5A4BF] cursor-pointer w-full p-1">
                  <FaPowerOff className="w-6 h-6" />
                  <span className="text-left text-sm ">Log Out</span>
                </div>

                {/* <a className="px-5 py-3 hover:bg-gray-200" href="#">
                  About Us
                </a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">
                  Contact Us
                </a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">
                  Privacy Policy
                </a> */}
              </div>
              {/* className="hidden peer-hover:flex hover:flex
         w-[400px] absolute top-[40px] right-0
         flex-col bg-white drop-shadow-lg" */}
            </div>
          </div>
        </div>
      </div>
      {
        // mobile nav
        menu ? (
          <div className=" flex md:hidden flex-col items-center justify-around items-centerx">
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              How it Works
            </a>
            <a
              href="#"
              className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Help
            </a>

            <div className="flex items-center justify-center divide-x relative">
              <a
                href="#"
                className="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                FAQs
              </a>
            </div>
          </div>
        ) : null
      }
    </nav>
  );
};

export default Header;
