import { useSelector } from "react-redux";
import Product from "../Product";
import { Container1, Container2 } from "./styles";
import { Link } from "react-router-dom";
const Products = () => {
  const popularProducts = useSelector((state) => state.home.PopularProduct);
  const row1 = popularProducts?.slice(0, 3);
  const row2 = popularProducts?.slice(3, 5);
  return (
    <>
      <Container1>
        {row1?.map(({ _id, name, images, size, color }) => (
          <Product
            key={_id}
            name={name}
            size={size[0]}
            color={color[0]}
            img={images.split("~")[0]}
            id={_id}
          />
        ))}
      </Container1>
      <Container2>
        {row2?.map(({ _id, name, images, size, color }) => (
          <Product
            key={_id}
            name={name}
            size={size[0]}
            color={color[0]}
            img={images.split("~")[0]}
            id={_id}
          />
        ))}
      </Container2>
    </>
  );
};

export default Products;
