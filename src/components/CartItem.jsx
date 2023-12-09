import { formatCurrency } from "../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item}) {
  const { id, name, quantity, totalPrice } = item;


  return (
    <li  className="flex w-full items-center justify-between gap-2 py-3">
      <p className="mb-1 flex w-[100px] flex-wrap sm:mb-0 md:w-full">
        {quantity}&times; <span>{name}</span>
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <UpdateItemQuantity
          id={id}
        />
        <p className="px-4 text-sm">{formatCurrency(totalPrice)}</p>
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
