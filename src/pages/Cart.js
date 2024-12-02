import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartR.items);
  const dispatch = useDispatch();
  console.log("dispatchfn", dispatch);
  const handleClearCart = () => {
    console.log("clearCart", clearCart());
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="m-auto w-6/12">
        <button
          className="m-2 p-2 text-white bg-black rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1>Cart Is Empty.Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
