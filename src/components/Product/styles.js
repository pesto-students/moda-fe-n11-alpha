import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: ${(props) => props.theme.color.modaLightYellow};
  position: relative;
  border-radius: 20px;
  margin-top: 2rem;
  box-shadow: 0 7px 30px -10px rgb(10 10 10 / 89%);
  ${mobile({ width: "100%" })}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
`;
export const Actions = styled.section`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  bottom: 12%;
`;
