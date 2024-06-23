import React from "react";
import EmailImg from "../../../assets/emailVerified/emailverify.gif"
import { Link } from "react-router-dom";

export const EmailVerifiedPage = ({Email, DisplayName}) => {
  return (
    <>
      <div className=" flex justify-center items-center h-[100vh] bg-blue-300 ">
          <div className=" flex justify-center flex-col items-center  ">
            <div>
            <picture>
              <img src={EmailImg} alt={EmailImg} className=" h-auto w-full object-cover " />             
            </picture>
            </div>
            <h1 className=" font-nunito font-bold text-[30px] mb-3 text-blue-600 " > {DisplayName ? DisplayName : null } </h1>
            <h1 className=" font-nunito font-bold text-[30px] " >
               Please verify your email { Email ? Email : "error@gmail.com" }  
            </h1>
            <button className=" px-8 py-5 bg-green-500 rounded-2xl items-center mt-6 font-nunito font-bold text-xl capitalize " >
              <Link to={"https://mail.google.com/mail/u/0/#inbox"} target="_blank" >
              check your email 
              </Link>
            </button>         
          </div>
      </div>
    </>
  );
};
