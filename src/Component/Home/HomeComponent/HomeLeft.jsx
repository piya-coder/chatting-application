import React from "react";
import profileImg from "../../../assets/home/home.png";
import { FaHome } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";


export const HomeLeft = ({active}) => {
  console.log(active);
  return (
    <>
   <div className="m-4">
   <div className=" bg-base-color rounded-lg h-[100vh] p-[38px] ">
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
              <li className= {
                active === "FaHome"
                ? " w-[160px] h-[90px] bg-white cursor-pointer ml-4 rounded-l-[12px] flex justify-center items-center" 
                : "cursor-pointer"
              }>
              <FaHome className=" w-[50px] h-[50px] relative
               text-base-color hover:text-green-700 " />
              <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
              </li>
              <li className=" w-[160px] h-[90px] bg-white ml-4 rounded-l-[12px] flex justify-center items-center ">
              <FaRegMessage className=" w-[50px] h-[50px] relative
               text-base-color hover:text-green-700 " />
              <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
              </li>
              <li className=" w-[160px] h-[90px] bg-white ml-4 rounded-l-[12px] flex justify-center items-center ">
              <FaBell className=" w-[50px] h-[50px] relative
               text-base-color hover:text-green-700 " />
              <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
              </li>
              <li className=" w-[160px] h-[90px] bg-white ml-4 rounded-l-[12px] flex justify-center items-center ">
              <IoSettingsOutline className=" w-[50px] h-[50px] relative
               text-base-color hover:text-green-700 " />
              <span className="w-2 h-[90px] bg-base-color absolute right-[-38px] rounded-l-[20px] "></span>
              </li>
              <li className=" cursor-pointer ">
              <IoLogOutOutline className=" w-[50px] h-[50px] text-white mt-[150px] " />             
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

" w-[160px] h-[90px] bg-white ml-4 rounded-l-[12px] flex justify-center items-center"