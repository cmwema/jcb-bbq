import React from "react";
import { Hero, PopularDishes, How } from "../components";
import { getallProducts } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";


function Home() {
  const products = useLoaderData();
  return (
    <div style={{overflowX: 'hidden'}}>
      <Hero products={products}/>
      <PopularDishes products={products}/>
      <How />
    </div>
  );
}

export async function loader() {
  return await getallProducts();
}


export default Home;
