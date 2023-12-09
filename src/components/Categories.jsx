import React from "react";
import { getCategories } from "../services/apiRestaurant";

async function getCategory() {
  try {
    const data = await getCategories();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

const category = await getCategory();

function Categories() {
  return (
    <section className="my-5 flex w-[90%] flex-col items-center justify-center">
      <h1 className="py-3 text-center  text-3xl font-bold tracking-widest text-teal-500">
        Our Food & Drinks Categories
      </h1>
      <div className="flex flex-wrap items-center justify-center p-5">
        {category.map((item, key) => (
          <div key={key} className="flex w-[150px] flex-col items-center gap-2 p-4 text-center md:w-[200px] md:gap-4">
            {/* <div className="h-20 w-20 rounded-full border border-gray-400 md:h-24 md:w-24">
              <img className="h-full w-full rounded-full" src={item.image} />
            </div> */}
            <h1 className="text-lg font-semibold p-2 bg-gray-300">{item.name}</h1>
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
