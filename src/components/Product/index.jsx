import { Actions, Container, Image } from "./styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
const Product = ({ img, id }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/ProductDescription/${id}`);
  }

  return (
    <Container>
      <Image src={img} onClick={handleClick} />

      <Actions>
        <Button variant="grey">Buy Now</Button>
        <Button variant="grey">Add To Cart</Button>
      </Actions>
    </Container>
  );
};

export default Product;
