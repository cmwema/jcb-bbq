const API_URL = "https://restaurant-erp-api.onrender.com";
// const API_URL = "http://127.0.0.1:8000";
const ACCESS_TOKEN = localStorage.getItem("accessToken");

export async function getDashboadData() {
  const orders = await getOrders();

  const products = await getallProducts();
  const categories = await getCategories();

  return {
    orders,
    products,
    categories,
  };
}

///////////////////////////////////////////////////////////
// Orders
///////////////////////////////////////////////////////////

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) throw Error("Failed getting orders");

  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    let orderItems = [];
    let orderCost = 0;

    for (let j = 0; j < data[i].order_items.length; j++) {
      const res = await getOrderItem(data[i].order_items[j]);
      orderItems.push(res);
      orderCost += res.cost;
    }
    data[i].order_items = orderItems;
    data[i]["order_cost"] = orderCost;
  }
  return data;
}
export async function createOrder(cart) {
  const order_items = [];

  for (let i = 0; i < cart.length; i++) {
    const res = await createOrderItem(cart[i]);
    const orderItem = await res.json();
    order_items.push(orderItem.id);
  }
  const newOrder = {
    // order_type: "eat_in",
    order_items: order_items,
  };

  try {
    const res = await fetch(`${API_URL}/orders/`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}

///////////////////////////////////////////////////////////
// Order Items
///////////////////////////////////////////////////////////

export async function getOrderItem(id) {
  const res = await fetch(`${API_URL}/orderitems/${id}/`);
  if (!res.ok) throw Error("Failed getting order item");

  let data = await res.json();
  const product = await getProduct(data.product);

  data["cost"] = product.price * data.quantity;
  data["product"] = product.name;

  return data;
}

export async function createOrderItem(item) {
  const newItem = {
    product: item.id,
    quantity: item.quantity,
  };
  try {
    const res = await fetch(`${API_URL}/orderitems/`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (e) {
    console.log(e);
  }
}


///////////////////////////////////////////////////////////
// Products
///////////////////////////////////////////////////////////
async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}/`);
  if (!res.ok) throw Error("Failed getting product");
  const data = await res.json();

  return data;
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw Error("Failed deleting product");
  }

  return res;
}

export async function createProduct(item) {
  try {
    const res = await fetch(`${API_URL}/products/`, {
      method: "POST",
      body: item,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
// get all products
export async function getallProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  return data;
}


///////////////////////////////////////////////////////////
// Categories
///////////////////////////////////////////////////////////
export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) throw Error("Failed getting categories");

  const data = await res.json();
  return data;
}
export async function createCategory(data) {
  const res = await fetch(`${API_URL}/categories/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return await res.json();
}

export async function deleteCategory(id) {
  const res = await fetch(`${API_URL}/categories/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw Error("Failed deleting category");
  }

  return res;
}

///////////////////////////////////////////////////////////
// Authentication
///////////////////////////////////////////////////////////
export async function login(data) {
  try {
    const res = await fetch(`${API_URL}/token/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (e) {
    console.log(e);
  }
}


///////////////////////////////////////////////////////////
// Tables
///////////////////////////////////////////////////////////

export async function getTables() {
  const res = await fetch(`${API_URL}/tables`);
  if (!res.ok) throw Error("Failed getting tables");

  const data = await res.json();
  return data;
}

