import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const nameHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="App-Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li onClick={nameHandler}>{btnName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
