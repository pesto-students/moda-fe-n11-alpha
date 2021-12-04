import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import Button from "../Button";
import { data } from "../../Data";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Desc,
} from "./styles";
import useCarousal from "./useCarousalHook";
const Carousal = () => {
  const [slideIndex, handleClick] = useCarousal();
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <VscTriangleLeft size={28} />
      </Arrow>
      {data.map((item, index, arr) => (
        <Wrapper key={index} slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image alt="slider" src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <h1>{item.title}</h1>
              <Desc>{item.desc}</Desc>
              <Button variant="light">SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
      ))}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <VscTriangleRight size={28} />
      </Arrow>
    </Container>
  );
};

export default Carousal;
