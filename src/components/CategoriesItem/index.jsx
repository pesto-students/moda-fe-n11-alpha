import { Container, SubHeader, Image, Title } from "./styles";
import { Button } from "../../components";

const CategoryItem = ({ img, title }) => {
  return (
    <Container>
      <Image src={img} />
      <SubHeader>
        <Title>{title}</Title>
        <Button variant="grey">SHOP NOW</Button>
      </SubHeader>
    </Container>
  );
};
export default CategoryItem;
