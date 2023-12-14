import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getDashboadData } from "../services/apiRestaurant";

function Dashboard() {
  const navigate = useNavigate();
  const { orders, products, categories } = useLoaderData();
  let orderedProducts = [...products];
  orderedProducts = orderedProducts.sort((a, b) => a.id - b.id);


  const handleDeleteOnClick = (id, type) => {
    localStorage.setItem("deleteProductId", id);
    localStorage.setItem("type", type)
    navigate("/admin/delete")
  };

  return (
    <div>
      <section>{/* sales summary and highlights */}</section>
      <section className="flex justify-between gap-4 py-4">
        <table className="h-max w-max border-collapse overflow-hidden font-sans shadow-md ">
          <thead className="block bg-gray-300">
            <tr>
              <th className="w-full p-2 text-center text-xl" colSpan={5}>
                Products
              </th>
            </tr>
            <tr className="flex">
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Img
              </th>
              <th className="w-[150px] border-r bg-gray-300 p-3 text-left">
                Name
              </th>
              <th className="w-[150px] border-r bg-gray-300 p-3 text-left">
                Category
              </th>
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Buy Price
              </th>
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Sell Price
              </th>
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Orders
              </th>
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Profit
              </th>
              <th className="w-[100px] border-r bg-gray-300 p-3 text-left">
                Edit
              </th>
              <th className="w-[100px] bg-gray-300 p-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="block h-[400px] overflow-y-auto">
            {orderedProducts.map((item) => {
              const totalOrders = item.total_orders || 0;
              return (
                <tr
                  className="flex  border-b text-center hover:bg-gray-200"
                  key={item.id}
                >
                  <td className="w-[100px] border-r p-2 text-left capitalize">
                    <img
                      src={item.image}
                      style={{ width: "40px", height: "40px" }}
                      alt={item.name}
                    />
                  </td>
                  <td className="w-[150px] border-r p-3 text-left capitalize">
                    {item.name}
                  </td>
                  <td className="w-[150px] border-r p-3 text-left capitalize">
                    {
                      categories.filter((cat) => cat.id === item.category)[0]
                        .name
                    }
                  </td>
                  <td className="w-[100px] border-r p-3 text-left">
                    {item.buying_price}
                  </td>
                  <td className="w-[100px] border-r p-3 text-left">
                    {item.price}
                  </td>
                  <td className="w-[100px] border-r p-3 text-left">
                    {totalOrders}
                  </td>
                  <td className="w-[100px] border-r p-3 text-left">
                    {item.price * totalOrders - item.buying_price * totalOrders}
                  </td>
                  <td className="flex w-[100px] items-center justify-center border-r p-3 text-left">
                    <button className="w-max rounded-md bg-teal-400 px-3">
                      Edit
                    </button>
                  </td>
                  <td className="flex  w-[100px] items-center justify-center p-3 text-left">
                    <button
                      onClick={(e) => handleDeleteOnClick(item.id, "product")}
                      className="w-max rounded-md bg-red-400 px-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="h-max w-max border-collapse overflow-hidden font-sans shadow-md ">
          <thead className="block w-full bg-gray-300">
            <tr>
              <th className="w-full p-2 text-xl" colSpan={4}>
                Top products
              </th>
            </tr>
            <tr>
              <th className="bg-gray-300 p-3 text-left">Img</th>
              <th className="bg-gray-300 p-3 text-left">Name</th>
              <th className="bg-gray-300 p-3 text-left">Orders</th>
              <th className="bg-gray-300 p-3 text-left">Sales(KES)</th>
            </tr>
          </thead>
          <tbody className="block h-[400px] w-full overflow-y-auto">
            {products.slice(0, 5).map((item) => {
              const totalOrders = item.total_orders || 0;
              const revenue = totalOrders * item.price;

              return (
                <tr className=" border-b hover:bg-gray-200" key={item.id}>
                  <td className="h-[60px] p-2 text-left capitalize">
                    <img
                      src={item.image}
                      style={{ width: "40px", height: "40px" }}
                      alt={item.name}
                    />
                  </td>
                  <td className="p-3 text-left capitalize">{item.name}</td>
                  <td className="p-3 text-left">{totalOrders}</td>
                  <td className="p-3 text-left">{revenue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="flex justify-between gap-4">
        <table className="max-h-[300px] w-max  border-collapse overflow-hidden font-sans shadow-md ">
          <thead className="bg-gray-300">
            <tr>
              <th className="w-full p-2 text-xl" colSpan={4}>
                Categories
              </th>
            </tr>
            <tr>
              <th className="bg-gray-300 p-3 text-left">Id</th>
              <th className="bg-gray-300 p-3 text-left">Name</th>
              <th className="bg-gray-300 p-3 text-left">Edit</th>
              <th className="bg-gray-300 p-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {categories.map((item) => {
              return (
                <tr className="border-b hover:bg-gray-200" key={item.id}>
                  <td className="p-2 text-left capitalize">{item.id}</td>
                  <td className="p-3 text-left capitalize">{item.name}</td>
                  <td className="items-center justify-center p-3 text-left capitalize">
                    <button className="w-max rounded-md bg-teal-400 px-3">
                      Edit
                    </button>
                  </td>
                  <td className="items-center justify-center p-3 text-left capitalize">
                    <button
                      onClick={(e) => handleDeleteOnClick(item.id, "category")}
                      className="w-max rounded-md bg-red-400 px-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="h-max w-max border-collapse overflow-hidden font-sans shadow-md ">
          <thead className="block bg-gray-300">
            <tr className="flex">
              {/* <th className="w-[20px] border-r p-3 text-left">Id</th> */}
              <th className="w-[100px] border-r p-3 text-left">Date</th>
              <th className="w-[120px] border-r p-3 text-left">Time</th>
              <th className="w-[130px] border-r p-3 text-left">Order Type</th>
              <th className="w-[100px] border-r p-3 text-left">Cost (KES)</th>
              <th className="w-[400px] p-3 text-left">Order Items</th>
            </tr>
          </thead>
          <tbody className="block h-[400px] w-full overflow-y-auto">
            {orders.map((item) => (
              <tr className="flex border-b hover:bg-gray-200" key={item.id}>
                {/* <td className="w-[20px] border-r p-3 text-left">{item.id}</td> */}
                <td className="w-[100px] border-r p-3 text-left">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
                <td className="w-[120px] border-r p-3 text-left">
                  {new Date(item.created_at).toLocaleTimeString()}
                </td>
                <td className="w-[130px] border-r p-3 text-left capitalize">
                  {item.order_type}
                </td>
                <td className="w-[100px] border-r p-3 text-left">
                  {item.order_cost}
                </td>
                <td className="flex flex-wrap w-[400px] p-3 text-left">
                  {item.order_items.map((item) => (
                    <p className="pr-2 capitalize" key={item.id}>
                      {item.product},
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;

export async function loader() {
  try {
    return await getDashboadData();
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    return { orders: [], products: [], categories: [] };
  }
}
