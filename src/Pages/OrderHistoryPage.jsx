import React, { useEffect, useState } from "react";
import "./OrderHistory.css"; // Create this CSS file for styling

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please log in to view your order history.");
      window.location.href = "/login";
      return;
    }

    setCurrentUser(user);

    const userOrdersKey = `orders_${user.email}`;
    const storedOrders = JSON.parse(localStorage.getItem(userOrdersKey)) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="orderhistory">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orderhistory-list">
          {orders.map((order) => (
            <div key={order.orderId} className="orderhistory-card">
              <div className="orderhistory-header">
                <p><strong>Account:</strong> {currentUser.email}</p>
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Total Cost:</strong> ${order.totalAmount}</p>
              </div>
              <div className="orderhistory-items">
                <div className="orderhistory-items-header">
                  <p>Product</p>
                  <p>Quantity</p>
                  <p>Price</p>
                  <p>Total</p>
                </div>
                <hr />
                {order.items.map((item) => (
                  <div key={item.id} className="orderhistory-item-row">
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>${item.price}</p>
                    <p>${item.total}</p>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
