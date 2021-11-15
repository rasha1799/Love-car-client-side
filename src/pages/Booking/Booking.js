import React, { useState } from "react";
import axios from "axios";
import "./Booking.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const [orders, setOrders] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const email = user.email;
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
    data.order = orders;
    console.log(orders);

    axios.post("http://localhost:5000/addOrdersForm", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input
          placeholder="phone number"
          defaultValue=""
          {...register("phone")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Booking;
