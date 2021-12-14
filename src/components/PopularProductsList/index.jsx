import { popularProducts } from "../../Data";
import Product from "../Product";
import { Container1, Container2 } from "./styles";
import { Link } from "react-router-dom";
const Products = () => {
  const row1 = popularProducts.slice(0, 3);
  const row2 = popularProducts.slice(3, 5);
  return (
    <>
      <Container1>
        {row1.map(({ id, img }) => (
          <Product key={id} img={img} id={id} />
        ))}
      </Container1>
      <Container2>
        {row2.map(({ id, img }) => (
          <Product key={id} img={img} id={id} />
        ))}
      </Container2>
    </>
  );
};

export default Products;
