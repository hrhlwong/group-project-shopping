// /src/Pages/Checkout.jsx

import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "/login";
      return;
    }

    const userOrdersKey = `orders_${currentUser.email}`;
    const storedOrders = JSON.parse(localStorage.getItem(userOrdersKey)) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.orderId} className="order-card">
            <h3>Order Date: {order.date}</h3>
            <p>Total: ${order.totalAmount}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} — {item.quantity} × ${item.price} = ${item.total}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
