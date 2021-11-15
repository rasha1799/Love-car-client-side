import React from "react";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
import Design from "./Design/Design";
import ServiceLoad from "./ServiceLoad/ServiceLoad";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceLoad></ServiceLoad>
      <Reviews></Reviews>
      <Design></Design>
    </div>
  );
};

export default Home;
