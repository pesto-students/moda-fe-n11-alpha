import React from "react";
import Categories from "../../components/Categories";
import PopularProductsList from "../../components/PopularProductsList";
import Carousal from "../../components/Carousal";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Categories />
      <PopularProductsList />
    </div>
  );
};

export default Home;
