import { Container, SubHeader, Image, Title } from "./styles";
import { Button } from "../../components";
import useCategoryItemHook from "./useCategoryItemHook";

const CategoryItem = ({ img, title }) => {
  const [handleTextClick] = useCategoryItemHook();
  return (
    <Container>
      <Image src={img} alt={title} />
      <SubHeader>
        <Title>{title}</Title>
        <Button
          onClick={(e) => {
            handleTextClick(title);
          }}
          variant="grey"
        >
          SHOP NOW
        </Button>
      </SubHeader>
    </Container>
  );
};
export default CategoryItem;
