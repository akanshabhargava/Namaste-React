import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  //let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // btnName = "Logout";
              // console.log(btnName);
              // setBtnNameReact("Logout");
              setBtnNameReact((prevVal) => {
                if (prevVal === "Login") {
                  return "Logout";
                } else {
                  return "Login";
                }
              });
            }}
          >
            {/* {btnName} */}
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
