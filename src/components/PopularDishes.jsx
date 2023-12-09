import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Product from "./Product";

function PopularDishes({products}) {
  const dishes = products.slice(0, 4)
  return (
    <section className="my-5 flex w-full flex-col items-center p-2 md:p-4">
      <h1 className="py-3 text-center  text-3xl font-bold tracking-widest text-teal-500">
        Popular Dishes
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 p-2 md:gap-24 md:p-5">
        {/* //item */}
        {dishes.map((item) => (
          <Product
            image={item.image}
            name={item.name}
            key={item.id}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>

      <Link to="/menu">
        <button className="mt-3 flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-300 bg-orange-500 p-3 px-5 text-white hover:border-orange-500 hover:bg-white hover:text-gray-700">
          Explore Menu <AiOutlineArrowRight className="hover:text-orange-500" />
        </button>
      </Link>
    </section>
  );
}

export default PopularDishes;
