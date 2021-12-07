import React from "react";
import Announcements from "../../components/Announcements";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import PopularProductsList from "../../components/PopularProductsList";
import Carousal from "../../components/Carousal";
import Footer from "../../components/Footer";

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
