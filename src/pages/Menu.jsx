import React from "react";
import { Product } from "../components";
import { getallProducts, getCategories } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";


function Menu() {
  const {menu} = useLoaderData();

  return (
    <section>
      <div className="flex w-[80%] flex-col items-center justify-center gap-2 md:flex-row">
        {/* <Search /> */}
        {/* <form
          method="GET"
          action=""
          className="flex w-full justify-center gap-2 md:gap-4 "
        >
          <label htmlFor="languages">Categories:</label>{" "}
          <select
            name="category"
            id="languages"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-md border-none text-sm outline-none"
          >
            {categories.map((item) => (
              <option
                className="text-sm outline-none"
                key={item.id}
                value={item.name}
              >
                {item.name}
              </option>
            ))}
          </select>
        </form> */}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 p-2 md:gap-24 md:p-5">
        {menu.map((item, key) => (
          <Product
            key={key}
            image={item.image}
            name={item.name}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
export async function loader() {
  const menu = await getallProducts();
  const categories = await getCategories();
  return { menu, categories };
}
export default Menu;
