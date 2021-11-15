import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MYOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const email = user.email + "";
  console.log(email);
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [isDeleted]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });

      console.log(id);
    }
  };
  return (
    <div>
      <h2>My Orders:{orders.length}</h2>
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email} </h2>
      <ui>
        {orders.map((order) => (
          <li>
            {" "}
            Order ID: {order._id}
            <button onClick={() => handleDelete(order._id)}>Delete</button>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default MYOrders;
