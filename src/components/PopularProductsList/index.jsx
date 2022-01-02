import Product from "../Product";
import { Container1, Container2 } from "./styles";
import usePopulatProductHook from "./usePopulatProductHook";
const Products = () => {
  const [row1, row2, navigateToPayment] = usePopulatProductHook();
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
            navigateToPayment={navigateToPayment}
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
            navigateToPayment={navigateToPayment}
          />
        ))}
      </Container2>
    </>
  );
};

export default Products;
