import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart, increaseItemQuantity } from "../state/cartSlice";

function Product({ id, image, name, price }) {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    const iSInCart = cart.find((item) => item.id === newItem.id);
    if (iSInCart) {
      dispatch(increaseItemQuantity(newItem.id));
    } else {
      dispatch(addItem(newItem));
    }
  }
  return (
    <div
      key={id}
      className="flex w-[170px] flex-col items-center gap-4 rounded-lg border border-gray-300 bg-white p-3 py-5 shadow-sm md:w-[200px]"
    >
      <div className="h-24 w-24 rounded-full border border-gray-400 shadow-md">
        <img className="h-full w-full rounded-full" src={image} alt={name}/>
      </div>
      <p>{name}</p>

      <p className="text-xs tracking-widest md:text-sm">
        ksh. <span className="font-bold">{price}</span>
      </p>

      <button
        onClick={handleAddToCart}
        className="rounded-xl border border-gray-300 p-2 text-sm ease-in-out hover:bg-gray-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
