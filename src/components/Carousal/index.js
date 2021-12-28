import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import Button from "../Button";
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
import React, { useEffect } from "react";

const Carousal = () => {
  const [data, handleBtnClick, slideIndex, handleClick] = useCarousal();
  useEffect(() => {
    const timer = setInterval(() => {
      handleClick("right");
    }, 3000);
    return () => clearTimeout(timer);
  }, [slideIndex, handleClick]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <VscTriangleLeft size={28} />
      </Arrow>
      {data?.map((item, index) => (
        <Wrapper key={index} slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image alt="slider" src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <h1>{item.title}</h1>
              <Desc>{item.desc}</Desc>
              <Button onClick={handleBtnClick} variant="light">
                SHOP NOW
              </Button>
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
