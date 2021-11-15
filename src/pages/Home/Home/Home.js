import React from "react";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
import ServiceLoad from "./ServiceLoad/ServiceLoad";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceLoad></ServiceLoad>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
