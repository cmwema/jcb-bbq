import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../state/cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-1 p-2 md:flex-row md:gap-3">
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="px-2 text-2xl font-semibold text-gray-500"
      >
        -
      </button>

      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="px-2 text-2xl font-semibold text-gray-500"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
