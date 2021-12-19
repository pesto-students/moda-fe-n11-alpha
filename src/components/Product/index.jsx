import { Actions, Container, Image } from "./styles";
import { Button } from "../../components";
import useProductFunctionalityHook from "./useProductFunctionalityHook";
const Product = ({ img, id, name, color, size }) => {
  const [handleClick, handleAddToCart] = useProductFunctionalityHook(
    img,
    id,
    name,
    color,
    size
  );
  return (
    <Container>
      <Image src={img} onClick={handleClick} />

      <Actions>
        <Button variant="grey">Buy Now</Button>
        <Button onClick={handleAddToCart} variant="grey">
          Add To Cart
        </Button>
      </Actions>
    </Container>
  );
};

export default Product;
