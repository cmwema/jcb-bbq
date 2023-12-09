import React from "react";
import { createCategory } from "../services/apiRestaurant";
import { useNavigate } from "react-router-dom";

function AddCategory() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCategory({
        name: e.target[0].value,
      });

      navigate("/admin");
    } catch (error) {
      console.error("Category creation failed:", error);
    }
  };
  return (
    <div className="flex h-90vh w-full items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        action=""
        className="flex flex-col items-center gap-3 rounded-md bg-white p-8 shadow-xl shadow-gray-300"
      >
        <div>
          <label
            className="my-3 text-xl font-semibold text-black"
            htmlFor="name"
          >
            Category Name
          </label>
          <br />
          <input
            className="rounded-md border border-gray-200 p-2 px-3 outline-none"
            type="text"
            name="name"
            placeholder="e.g. dishes"
          />
        </div>
        
        <input
          className="cursor-pointer rounded-md border p-2 px-4 font-semibold hover:border-gray-300 hover:bg-gray-300"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
}

export default AddCategory;
