import React, { useState, useEffect } from "react";
import { getTables } from "../services/apiRestaurant";

function Checkout() {
  const [isEatIn, setIsEatIn] = useState(true);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    async function fetchTables() {
      const tablesData = await getTables();
      setTables(tablesData);
    }
    fetchTables();
  }, []);

  function handleOrderType(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "eat_in") {
      setIsEatIn(true);
    } else {
      setIsEatIn(false);
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="orderType">Type of Order: </label>
          <select name="orderType" id="orderType" onChange={handleOrderType}>
            <option value="eat_in">Eat In</option>
            <option value="take_away">Take Away</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        {isEatIn && (
          <div>
            <label htmlFor="table">Table</label>
            <select name="table" id="table">
              {tables.map((table, key) => (
                <option key={key} value={table.id}>
                  {table.id} capacity - {table.capacity}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="paymentMethod"></label>
        </div>
        <div>
          <label htmlFor="mpesaNumber">Mpesa Number</label>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
