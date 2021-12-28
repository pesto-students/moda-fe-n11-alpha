import React from "react";
import Categories from "../../components/Categories";
import PopularProductsList from "../../components/PopularProductsList";
import Carousal from "../../components/Carousal";

const Home = () => {
  return (
    <>
      <Carousal />
      <h1>Popular Categories</h1>
      <Categories />
      <h1>Popular Products</h1>
      <PopularProductsList />
    </>
  );
};

export default Home;
