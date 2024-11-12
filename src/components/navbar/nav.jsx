import React, { useState } from "react";
// import './App.css'

import LoginBtn from "../navbar/loginbtn";
import Registerbtn from "../navbar/registerbtn";
import Bandagelogo from "../icons/bandagelogo";
import ListTxt from "../navbar/listtxt";
import Accounticon from "../icons/accounticon";
import Searchicon from "../icons/searchicon";
import Shoppingcarticon from "../icons/shoppingcarticon";
import Favouriteicon from "../icons/favouriteicon";
import Herobackground from "../herosection/herobackground";
import Herodescription from "../herosection/herodescription";
import Herobtn from "../herosection/herobtn";
import Prevherobtn from "../herosection/prevherobtn";
import Nxtherobtn from "../herosection/nxtherobtn";
import Caroulindicator from "../herosection/carouindicator";

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const handleLoginClick = () => {
    setLoginStatus((prevStatus) => {
      const newStatus = !prevStatus;
      setShowRegister(newStatus);
      return newStatus;
    });
  };

  return (
    <div className="w-full ">
      <nav className="flex m-auto w-[80%] justify-between items-center  h-24">
        <Bandagelogo />

        <div className="m-auto  ">
          <ListTxt />
        </div>

        <div className="  flex  text-brandblue gap-2.5 text-sm font-bold">
          <Accounticon />

          <LoginBtn
            content={loginStatus ? "Logout" : "Login"}
            action={() => handleLoginClick(!loginStatus)}
          />

          {showRegister && (
            <>
              /
              <Registerbtn content={"Register"} />
            </>
          )}
        </div>

        <div className=" flex gap-5 ml-5 ">
          <Searchicon />
          <Shoppingcarticon />
          <Favouriteicon />
        </div>
      </nav>

      <section className="hero-container w-full">
        <Herobackground />
        <Herodescription />
        <Herobtn />
        <Nxtherobtn />
        <Prevherobtn />
        <Caroulindicator />
      </section>
    </div>
  );
}

export default Navbar;
