import React, { useState } from "react";
import { createProduct, getCategories } from "../services/apiRestaurant";
import { useLoaderData, useNavigate } from "react-router-dom";

function AddProduct() {
  const categories = useLoaderData();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(""); // Step 1

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Step 2
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category", selectedCategory);
    data.append("name", e.target[1].value);
    data.append("image", e.target[2].files[0]); // Assuming the image is a file input
    data.append("buying_price", e.target[3].value);
    data.append("price", e.target[4].value);
    data.append("description", e.target[5].value);

    try {
      await createProduct(data);
      navigate("/admin");
    } catch (error) {
      console.error("Product creation failed:", error);
    }
  };

  return (
    <div className="my-4 flex h-90vh items-center justify-center">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex w-max flex-col items-center gap-6 rounded-md bg-white p-8 shadow-xl shadow-gray-300"
      >
        <h1 className="mb-4 text-2xl font-bold">New Product</h1>

        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <label
              className="text-md font-semibold capitalize text-black"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="rounded-md border capitalize outline-none"
              defaultValue={categories[0].id}
              name="category"
              onChange={handleCategoryChange}
            >
              <option></option>
              {categories.map((item, key) => (
                <option key={key} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label
              className="text-md font-semibold capitalize text-black"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="tex-sm w-[200px] rounded-md border p-2 outline-none"
              type="text"
              name="name"
              placeholder="e.g. pork ribs"
            />
          </div>
        </div>
        <div className="flex w-max items-center">
          <input
            className="tex-sm rounded-md border outline-none"
            type="file"
            name="image"
            accept="image/*"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <label
              className="text-md font-semibold capitalize text-black"
              htmlFor="buying_price"
            >
              Buying Price
            </label>
            <input
              className="tex-sm w-[100px] rounded-md border p-2 outline-none"
              type="number"
              name="buying_price"
              placeholder="e.g. 900"
            />
          </div>
          <div className="flex items-center gap-4">
            <label
              className="text-md font-semibold capitalize text-black"
              htmlFor="price"
            >
              Sell Price
            </label>
            <input
              className="tex-sm w-[100px] rounded-md border p-2 outline-none"
              type="number"
              name="price"
              placeholder="e.g. 900"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <label
            className="text-md font-semibold capitalize text-black"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="tex-sm h-32 w-full rounded-md border p-2 outline-none"
            type="text"
            name="description"
            placeholder="e.g. pork ribs"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export async function loader() {
  return await getCategories();
}

export default AddProduct;
