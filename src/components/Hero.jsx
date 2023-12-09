import React from "react";
import HeroBg from "../img/heroBg.png";
  

function HeroSection({ products }) {
  const heroData = products.slice(0, 6);
  return (
    <section className="min-h-90vh flex w-screen flex-col  items-center justify-center gap-2 px-4 md:flex-row md:px-16">
      <div className="W-[90%] flex h-75vh flex-col items-start justify-center gap-6 py-2 sm:mt-20">
        <p className="px-4 text-[2rem] font-bold tracking-wide text-black sm:text-[1.75rem]">
          Discover Unmatched Speed and Excellence in
          <span className="px-2 text-[3rem]  text-teal-500">
            Nairobi's Culinary Scene
          </span>
        </p>
        <p className="px-4 text-center text-base text-gray-900 md:w-[100%] md:text-left">
          "Serving authentic Caribbean flavors while enjoying delightful cuisine
          and a vibrant, welcoming atmosphere."
        </p>

        <div className="flex w-full items-center justify-center gap-1 sm:px-2">
          <div className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-1 sm:px-2">
            <p className="text-sm font-semibold text-white">Eat In</p>
          </div>

          <div className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-1 sm:px-2">
            <p className="text-sm font-semibold text-white">Take Away</p>
          </div>

          <div className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-1 sm:px-2">
            <p className="text-sm font-semibold text-white">Delivery</p>
          </div>
        </div>
      </div>
      <div className="W-[90%] relative flex w-full items-center py-2">
        <img
          src={HeroBg}
          className=" ml-auto h-510 w-full md:w-3/4"
          alt="hero-bg"
        />

        <div className="absolute left-0 top-0 flex h-full w-full flex-wrap items-center justify-center gap-2 pt-8 md:gap-4 lg:gap-8 lg:px-16">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="flex flex-col items-center justify-center rounded-3xl bg-slate-200 p-4 drop-shadow-lg backdrop-blur-md"
              >
                <img src={n.image} className="-mt-16 w-24 rounded-md" alt="I1" />
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-xs text-red-600">Ksh. </span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
