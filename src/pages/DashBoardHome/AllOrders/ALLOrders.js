import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const [status, setStatus] = useState("");
  const email = user.email + "";
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
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
    }
    console.log(id);
  };
  const statusUpdate = () => {};
  return (
    <div>
      <h2>Total Orders:{orders.length}</h2>
      <ui>
        {orders.map((order) => (
          <li>
            Email: {order.email} <br /> Order ID: {order._id}
            <button onClick={() => handleDelete(order._id)}>Delete</button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => statusUpdate(order._id)}
            >
              Pending
            </button>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default AllOrders;
