import { LinkButton } from "../ui";
import {  useNavigate } from "react-router-dom";
import { CartItem, EmptyCart } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalCartPrice, getCart } from "../state/cartSlice";
import { formatCurrency } from "../utils/helpers";
import { createOrder } from "../services/apiRestaurant";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.cart.cart.length);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();

  if (!cart.length) return <EmptyCart />;

  const makeOrder = () => {
    createOrder(cart);
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="w-[300px] px-4 py-3 sm:w-[400px] md:w-[600px]">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item, key) => (
          <CartItem item={item} key={key} />
        ))}
        <li className="mt-2 flex items-center justify-between gap-4 py-3">
          <p className="mb-1 sm:mb-0">
            {totalCartItems} {totalCartItems === 1 ? "Item" : "Items"}
          </p>
          <p>Total Cost :</p>

          <p className="text-sm font-bold">{formatCurrency(totalCartPrice)}</p>
        </li>
      </ul>

      <div className="mt-6 flex w-full items-center justify-between space-x-2">
        <button
          className="cursor-pointer rounded-xl p-2 px-4 text-red-500"
          onClick={makeOrder}
        >
          Order
        </button>
        <button
          className="cursor-pointer rounded-xl p-2 px-4 text-red-500"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
