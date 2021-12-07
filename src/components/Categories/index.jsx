import React from "react";
import { categories } from "../../Data";
import CategoryItem from "../CategoriesItem";
import { Container } from "./styles";
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} img={item.img} title={item.title} />
      ))}
    </Container>
  );
};

export default Categories;
