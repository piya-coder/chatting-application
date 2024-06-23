import React from "react";
import profileImg from "../../../assets/home/home.png";
import { FaHome } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";


export const HomeLeft = () => {
const location = useLocation();
let active = location.pathname.split("/")[1];
  return (
    <>
      <div className="">
        <div className=" bg-base-color rounded-[20px] h-[100vh] p-[38px] ">
          <div className=" w-[100px] h-[100px] rounded-full bg-base-color relative ">
            <picture>
              <img
                src={profileImg}
                alt={profileImg}
                className=" w-full h-full object-cover overflow-hidden "
              />
            </picture>
            <div className=" mt-[90px] ">
              <ul className=" flex flex-col justify-center align-middle items-center gap-y-12 ">
                <li
                  className={
                    active === ""
                      ? " w-[160px] h-[90px] bg-white cursor-pointer ml-4 rounded-l-[20px] flex justify-center items-center"
                      : "cursor-pointer"
                  }
                >
                  <Link to={"/"}>
                  <FaHome
                    className=" w-[40px] h-[40px] relative
                    text-black hover:text-green-700 "
                  />
                  </Link>                 
                  <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
                </li>
                <li 
                className={
                  active === "chatting"
                    ? " w-[160px] h-[90px] bg-white cursor-pointer ml-4 rounded-l-[20px] flex justify-center items-center"
                    : "cursor-pointer"
                }
                >
                  <Link to={"/chatting"}>
                  <FaRegMessage
                    className=" w-[40px] h-[40px] relative
               text-black hover:text-green-700 "
                  />
                  </Link>

                  <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
                </li>
                <li 
                className={
                  active === "notification"
                    ? " w-[160px] h-[90px] bg-white cursor-pointer ml-4 rounded-l-[20px] flex justify-center items-center"
                    : "cursor-pointer"
                }
                >
                  <Link to={"/notification"}>
                  <FaBell
                    className=" w-[40px] h-[40px] relative
               text-black hover:text-green-700 "
                  />
                  </Link>

                  <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
                </li>
                <li 
                 className={
                  active === "settings"
                    ? " w-[160px] h-[90px] bg-white cursor-pointer ml-4 rounded-l-[20px] flex justify-center items-center"
                    : "cursor-pointer"
                }
                >
                  <Link to={"/settings"}>
                  <IoSettingsOutline
                    className=" w-[40px] h-[40px] relative
               text-black hover:text-green-700 "
                  />
                  </Link>
                  
                  <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
                </li>
                <li className=" cursor-pointer ">
                  <IoLogOutOutline className=" w-[40px] h-[40px] text-black mt-[60px] cursor-pointer " />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

(" w-[160px] h-[90px] bg-white ml-4 rounded-l-[12px] flex justify-center items-center");
