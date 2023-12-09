import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

function How() {
  return (
    <section className="my-3 flex w-full flex-col items-center justify-center p-3">
      <h1 className="py-5 text-center  text-3xl font-bold tracking-widest text-teal-500">
        How It Works
      </h1>

      <div className="flex w-[90%] flex-col items-center justify-between gap-3 py-6 md:w-[80%] md:flex-row">
        <h1 className="rounded-s-2xl border border-orange-500 p-3 px-5 font-medium tracking-wide">
          Choose Your Meals
        </h1>
        <FaArrowRight className="hidden text-xl text-teal-500 md:block" />
        <FaArrowDown className="block text-xl text-teal-500 md:hidden" />
        <h1 className="border border-orange-500 p-3 px-5 font-medium tracking-wide">
          Choose Type of order
        </h1>
        <FaArrowRight className="hidden text-xl text-teal-500 md:block" />
        <FaArrowDown className="block text-xl text-teal-500 md:hidden" />
        <h1 className="border border-orange-500 p-3 px-5 font-medium tracking-wide">
          Checkout
        </h1>
        <FaArrowRight className="hidden text-xl text-teal-500 md:block" />
        <FaArrowDown className="block text-xl text-teal-500 md:hidden" />
        <h1 className="rounded-e-2xl border border-orange-500 p-3 px-5 font-medium tracking-wide">
          Order is Delivered/Served
        </h1>
      </div>
    </section>
  );
}

export default How;
