import React from "react";
import CategoryItem from "../CategoriesItem";
import { Container } from "./styles";
import { useSelector } from "react-redux";
const Categories = () => {
  const categories = useSelector((state) => state.home.PopularCategories);
  return (
    <Container>
      {categories?.map((item) => (
        <CategoryItem key={item._id} img={item.img} title={item.title} />
      ))}
    </Container>
  );
};

export default Categories;
