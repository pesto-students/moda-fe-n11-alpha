import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f7e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.section`
  height: 100%;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100 + "vw"});
`;
export const Slide = styled.article`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgContainer = styled.section`
  position: relative;
  flex: 1;
  width: 80%;
  height: 100%;
`;
export const Image = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
export const InfoContainer = styled.div`
  flex: 1;
`;
export const InfoTitle = styled.h1`
  ${mobile({ fontSize: "24px" })}
`;
export const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "30px" })}
`;
export const Desc = styled.article`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
`;
