import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { HomeLeft } from "./HomeComponent/HomeLeft";
import { EmailVerifiedPage } from "./HomeComponent/EmailVerifiedPage";
import { HomeRight } from "./HomeComponent/HomeRight";


export const Home = () => {
  const auth = getAuth();
  const [userInfo, setuserInfo] = useState({
    EmailVerified: false,
    DisplayName: "",
    Email: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setuserInfo({
        ...userInfo,
        EmailVerified: user.emailVerified,
        DisplayName: user.displayName,
        Email: user.email,
      });
    });
  }, [userInfo.EmailVerified]);
  return (
    <>
      <div>
        {userInfo.EmailVerified ? (
          <div className="flex justify-between p-5 ">
            <HomeLeft />
            <HomeRight />
          </div>
        ) : (
          <EmailVerifiedPage
            email={userInfo.Email}
            displayName={userInfo.DisplayName}
          />
        )}
      </div>
    </>
  );
};
