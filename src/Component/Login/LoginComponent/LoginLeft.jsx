import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, 
    signInWithEmailAndPassword ,
    GoogleAuthProvider ,
    signInWithPopup
} from "firebase/auth";
import { Link, useNavigate  } from "react-router-dom";

///Login functionality
const LoginLeft = () => {
const Navigate = useNavigate ();
const auth = getAuth();
const provider = new GoogleAuthProvider() ;
const [loading, setLoading] = useState(false);
const HandleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
};
const [inputValue, setinputValue] = useState({
    email: "",
    password: ""
})
  /// HandleEye functionality implementation
const [Eye, setEye] = useState(false);
const HandleEye = () => {
        setEye(!Eye);
};
/// HandleInputValue functionality implementation
const HandleInputValue = (e)=>{
    setinputValue({
        ...inputValue,
        [e.target.id]: e.target.value,
    })
}
const HandleGoogleLogin = () =>{
    signInWithPopup(auth, provider).then((userCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(userCredential);
        const token = credential.accessToken;
        const user = userCredential.user;
      }).catch((error) => {
            console.log(error);
      });
}
/// email and password regex
const emailreges =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/// password validation
const passwordregesx =
/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}$/;
/// error functionality
const [Error, setError] = useState({
    EmailError: "",
    PasswordError: ""
})
const HandleSignUp = (e)=>{
    if(!inputValue.email) {
        setError({
            ...Error,
            EmailError: "email missing",
            PasswordError: "password missing"
        });
    }else if(!emailreges.test(inputValue.email)) {
        setError({
          ...Error,
          EmailError: "Email wrong",
        });
} else if (!inputValue.password) {
    setError({
      ...Error,
      PasswordError: "Invalid password",
    });
  } else if (!passwordregesx.test(inputValue.password)) {
    setError({
      ...Error,
      PasswordError: "  Invalid password ",
    });
  } else {
   
    setinputValue({
        email: "",
        password: ""
    })
   setError({
    EmailError: "",
    PasswordError: ""
   })
   setLoading(true);
   signInWithEmailAndPassword(auth,
    inputValue.email,
    inputValue.password
   ).then((userCredential) =>{
    localStorage.setItem("UserToken", userCredential._tokenResponse.idToken )
    Navigate("/home");
   }).catch((err) => {
    console.log("okay", err.message);
   })
   .finally(() => {
    setLoading(false);
  });
}
};



/// LoginLeft css implementation
return (
    <>
      <div className=" w-[55%] flex justify-center items-center h-[100vh] ">
        <div className="">
          <h1 className="text-font-color font-bold"></h1>
        </div>
        <div className="w-1/2 h-[100vh] flex justify-center items-center">
          <div>
            <h1 className="text-font-color font-bold text-[34px] mb-[13px] font-nunito  ">
              Login to your account!
            </h1>
            <div className="flex items-center border-2 border-gray-400 p-5
            w-[250px] rounded-lg ">
              <FcGoogle />
              <p className=" text-font-color 
              font-semibold font-sans text-[13px] 
              ml-3 mr-4 cursor-pointer " 
              onClick={HandleGoogleLogin} >
                Login with Google</p>
            </div>
            <form className="" onSubmit={HandleSubmit} >
              <div className="my-10 ">
                <label
                  htmlFor="email"
                  className="text-black font-normal font-nunito text-sm opacity-50 "
                >
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Youraddres@email.com"
                  id="email"
                  name="email"
                  autoComplete="off"
                  className="w-full py-[26px] rounded-lg border-blue-300 border-b-2 mt-1 
                 text-font-color font-sans font-semibold text-[20px]  "
                 onChange={HandleInputValue}
                 value={inputValue.email}
                />
                {Error.EmailError && (
                <span className="text-md ml-1 mt-3 block font-Nunito font-normal text-red-500">
                {Error.EmailError}
                </span>
              )}

              </div>
              <div className="my-10 relative ">
                <label
                  htmlFor="email"
                  className="text-black font-nunito font-normal text-sm opacity-50 "
                >
                  Password
                </label>
                <input
                  type={Eye ? "text" : "password"}
                  placeholder="12365784asdf#afj"
                  id="password"
                  name="Password"
                  autoComplete="off"
                  className="w-full py-[26px] rounded-lg 
                   border-blue-300 border-b-2 mt-1 
                    text-font-color font-sans font-semibold text-[20px] "
                  onChange={HandleInputValue}
                  value={inputValue.password}
                />
                 {Error.PasswordError && (
                <span className="text-md ml-1 mt-3 block font-Nunito font-normal text-red-500">
                 {Error.PasswordError}
                </span>
              )}
                  
                <div
                  className="absolute top-1/2 right-8 translate-y-[50%] cursor-pointer "
                  onClick={()=> setEye(!Eye)}>
                  {Eye ? <FaEyeSlash /> : <FaRegEye />}
                </div>
                <div className="absolute top-1/2 right-8 translate-y-[50%] cursor-pointer "></div>
              </div>
              <button
                type="submit"
                className="text-white text-[20px] 
                relative font-nunito font-normal
                 py-5 bg-base-color w-full 
                 rounded-lg "
                 onClick={HandleSignUp}
              >
                {loading && (
                  <div
                  class=" absolute left-[76%] top-[35%] border-b-4
                   border-red-500 rounded-full animate-spin
                    bg-indigo-200 h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></div>
                )}
                Login to Continue
              </button>
            </form>
            <div className="text-center mt-9 ">
              <h6 className="text-[14px] font-sans font-normal text-[#03014C] ">
              Don’t have an account ?
                <span className="text-[14px] 
                font-bold font-sans text-[#EA6C00] align-middle	
                hover:underline hover:decoration-indigo-600 ">
                     <Link to={"/"}>
                     Sign Up
                     </Link>
                 
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginLeft;
