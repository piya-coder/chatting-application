import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import registrationImg from "../../assets/registration.png";

import { getAuth, 
  createUserWithEmailAndPassword,
  sendEmailVerification ,
  updateProfile,
  onAuthStateChanged
 } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import { Link ,Navigate, useNavigate } from "react-router-dom";
export const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate ();
  const [loading, setLoading] = useState(false);
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Password, setPassword] = useState("");
  const [Eye, setEye] = useState(false);
  /// Error functionality
  const [EmailError, setEmailError] = useState("");
  const [FullNameError, setFullNameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  
  /// HandleEye functionality implementation
  const HandleEye = () => {
    setEye(!Eye);
  };
  /// setloading functionnality

  /// event functionality implementation///
  const handdleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  /// handle functionality implementation
  const HandleInput = (event) => {
    setEmail(event.target.value);
  };
  /// HandleFullName functionality implementation
  const HandleFullName = (event) => {
    setFullName(event.target.value);
  };
  /// HandleFullName functionality implementation
  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };

  /// validation
  const emailreges =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /// password validation
  const passwordregesx =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
  /// Error functionality implementation
  const HandleSignUp = () => {
    if (!Email) {
      setEmailError("input your email address");
    } 
    else if (!emailreges.test(Email)) {
      setEmailError("input your email address");
    } else if (!FullName) {
      setEmailError("");
      setFullNameError("please enter your full name");
    } else if (!Password) {
      setFullNameError("");
      setEmailError("");
      setPasswordError("please enter your password");
    } else if (!passwordregesx.test(Password)) {
      setFullNameError("");
      setEmailError("");
      setPasswordError("wrong password");
    } else {
      setLoading(true);
      setEmail("");
      setFullName("");
      setPassword("");
      setFullNameError("");
      setEmailError("");
      setPasswordError("");
      
       //  Sign up a new user
       createUserWithEmailAndPassword(auth, Email, Password)
       .then((userCredential) => {
        console.log(userCredential);
        toast.success('🦄 check your mail', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
          updateProfile(auth.currentUser, {
            displayName: FullName, 
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            onAuthStateChanged(auth, (userInfo) =>
          {
            let dbRef = ref(db, 'users/');
            set(push(dbRef), {
              username: auth.currentUser.displayName,
              email: auth.currentUser.email,
            }).then(()=>{
              console.log("data upload done on real time database");
            }).catch((error)=>{
              console.log(error, "data is not uploaded");
            })
          })
          }).catch((error)=>{
            console.log(error, "error data uploading");
          })
          setTimeout(() => {
            navigate("/login");
          }, 3000);         
          sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("check the email");
          });
       }).catch((error) => {
        if (error.message.includes("email")) {
          toast.error(`This email is already registerd try another email`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            style: { width: "22vw" },
            style: { height: "100px" },
          });
        } else {
          console.log(error.message);
        }
      })
       .finally(() => {
         setLoading(false);
       });
      }
  };
  return (
    <>
      <div className="flex justify-between">
        < ToastContainer/>
        <div className="w-1/2 h-[100vh] flex justify-center items-center">
          <div>
            <h1 className="text-font-color font-bold text-[34px] mb-[13px] font-nunito ">
              Get started with easily register
            </h1>
            <p className="text-black font-normal text-[20px] opacity-50 mb-[39px] font-nunito ">
              Free register and you can enjoy it
            </p>
            <form onSubmit={handdleSubmit}>
              <div className="my-10 ">
                <label
                  htmlFor="email"
                  className="text-black font-normal font-nunito text-sm opacity-50 "
                >
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Ladushing691@gmail.com"
                  id="email"
                  name="email"
                  autoComplete="off"
                  className="w-full p-[26px] rounded-lg border-2 mt-1 "
                  onChange={HandleInput}
                  value={Email}
                />
                <div>
                  {EmailError && (
                    <span className=" text-red-500 font-nunito font-normal mt-3 ml text-md block ">
                      {EmailError}{" "}
                    </span>
                  )}
                </div>
              </div>

              <div className="my-10 ">
                <label
                  htmlFor="email"
                  className="text-black font-normal font-nunito text-sm opacity-50 "
                >
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Ladushing GTG"
                  id="email"
                  name="email"
                  autoComplete="off"
                  className="w-full p-[26px] rounded-lg  border-2 mt-1 "
                  onChange={HandleFullName}
                  value={FullName}
                />
                <div>
                  {FullNameError && (
                    <span className=" text-red-500 font-nunito font-normal mt-3 ml text-md block ">
                      {FullNameError}
                    </span>
                  )}
                </div>
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
                  id="email"
                  name="email"
                  autoComplete="off"
                  className="w-full p-[26px] rounded-lg border-2 mt-1 "
                  onChange={HandlePassword}
                  value={Password}
                />
                <div>
                  {PasswordError && (
                    <span className=" text-red-500 font-nunito font-normal mt-3 ml text-md block ">
                      {PasswordError}
                    </span>
                  )}
                </div>
                <div
                  className="absolute top-1/2 right-8 translate-y-[50%] cursor-pointer "
                  onClick={HandleEye}
                >
                  {Eye ? <FaEyeSlash /> : <FaRegEye />}
                </div>
              </div>
              <button
                type="submit"
                className="text-white text-[20px] relative font-nunito font-normal py-5 bg-base-color w-full rounded-[86px] "
                onClick={HandleSignUp}
              >
                {" "}
                {loading && (
                  <div
                  class=" absolute left-[60%] top-[35%] border-b-4
                   border-red-500 rounded-full animate-spin
                    bg-indigo-500 h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></div>
                )}
                Sign up
              </button>
            </form>
            <div className="text-center mt-9 ">
              <h6 className="text-[14px] font-sans font-normal text-[#03014C] ">
                Already have an account ?
                <span className="text-[14px] font-bold font-sans text-[#EA6C00] align-middle	hover:underline hover:decoration-indigo-600 ">
                <Link to={"/login"}>
                     Sign In
                     </Link>
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[100vh] bg-red-500">
          <img
            src={registrationImg}
            alt={registrationImg}
            className="w-full h-screen"
          />
        </div>
      </div>
    </>
  );
};
