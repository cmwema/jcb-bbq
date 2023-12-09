import React from "react";
import { deleteCategory, deleteProduct } from "../services/apiRestaurant";
import { LinkButton } from "../ui";
import { useLoaderData, useNavigate } from "react-router-dom";

function Delete() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (data[1] === "product") {
        const res = await deleteProduct(Number(data[0]));
        if (res.status === 204) navigate("/admin");
        }
        
        if (data[1] === "category") {
          const res = await deleteCategory(Number(data[0]));
          if (res.status === 204) navigate("/admin");
        }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-90vh w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        method="POST"
        action=""
        className="flex flex-col items-center gap-3 rounded-md bg-white p-8 shadow-xl shadow-gray-300"
      >
        <input
          className="cursor-pointer rounded-md border p-2 px-4 font-semibold hover:border-gray-300 hover:bg-gray-300"
          type="submit"
          value="Confirm"
          onChange={onChangeHandler}
        />
        <LinkButton to="/admin">&larr; Back</LinkButton>
      </form>
    </div>
  );
}

export function loader() {
  const data = [
    localStorage.getItem("deleteProductId"),
    localStorage.getItem("type"),
  ];
  return data;
}

export default Delete;
