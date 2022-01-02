import React from "react";
import Categories from "../../components/Categories";
import PopularProductsList from "../../components/PopularProductsList";
import Carousal from "../../components/Carousal";
import withNavbarFooterHOC from "../../hoc/withNavbarFooterHOC";
import { Heading } from "./styles";

const Home = () => {
  return (
    <>
      <Carousal />
      <Heading>Popular Categories</Heading>
      <Categories />
      <Heading>Popular Products</Heading>
      <PopularProductsList />
    </>
  );
};

export default withNavbarFooterHOC(Home);
