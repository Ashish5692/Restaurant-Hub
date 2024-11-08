import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Log In");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);  // now cart will get store items, when items will be modified cart items will also be modified.
  console.log(cartItems)

  return (
    <div className="flex justify-between shadow-md bg-yellow-50 sm:bg-pink-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-7">
          <li>
            Status : {onlineStatus ? "🍏" : "🔴"}
          </li>
          <li>
            <Link className="h-links" to="/">Home</Link></li>
          <li>
            <Link className="h-links" to="/about">About Us</Link></li>
          <li>
            <Link className="h-links" to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
            Cart - {(cartItems.length)}
            </Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Log In"
                ? setBtnNameReact("Log Out")
                : setBtnNameReact("Log In");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
