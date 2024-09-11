import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  //let btnName = "Login";
  console.log("header");
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            {/* <Link to="/">Home</Link> */}
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
