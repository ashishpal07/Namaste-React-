import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <div className=" flex w-7/12 justify-between mx-auto m-4 p-4">
        <div className="font-semibold">Cart Items</div>
        <button className="p-2 bg-red-700 font-semibold text-white rounded-md"
            onClick={emptyCartHandler}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-7/12 mx-auto">
        {cartItems.length === 0 ? (<div className="text-lg">Your cart is empty. Please go and do shopping!</div>) : (<ListItem items={cartItems} />)}
      </div>
    </div>
  );
};

export default Cart;
