import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

  const nameHandler = () => {
    btnName === "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
  };

  // subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-lime-300 sticky top-0 z-10">
      <div className="p-1">
        <img className="w-20" src={LOGO_URL} alt="App-Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-2 m-2">
          <li className="px-4 flex">
            {onlineStatus ? (
              <p className="flex justify-between items-center">
                <FaRegCheckCircle className="mx-2 text-green-500" />{" "}
                <span className="text-[10px]">Online</span>
              </p>
            ) : (
              <p className="flex justify-between items-center">
                <FaRegTimesCircle className="mx-2 text-red-500" />
                <span className="text-[10px]">Offline</span>
              </p>
            )}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart" className="flex justify-between w-[30px]">
              <BsCart4 className="" />
              <div className="bg-red-600 flex justify-center text-sm font-serif text-white rounded-[50%] h-[13px] w-[13px] items-center p-1">
                {cartItems.length}
              </div>
            </Link>
          </li>
          <li className="px-4 font-bold" onClick={nameHandler}>
            <button className="px-2 py-1 rounded-lg bg-black text-white text-[15px]">
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
