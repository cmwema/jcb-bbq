import { useDispatch } from "react-redux";
import { deleteItem } from "../state/cartSlice";
import { RxCross2 } from "react-icons/rx";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <button  className="pl-3" onClick={() => dispatch(deleteItem(id))}>
      <RxCross2 className="bg-gray-50 text-xl font-bold text-red-600" />
    </button>
  );
}

export default DeleteItem;
