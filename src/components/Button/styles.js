import styled from "styled-components";
import { mobile } from "../../responsive";

export const CustomButton = styled.button`
  ${(props) => console.log("***", props)}
  width: ${(props) => props.theme.buttons[props.variant].width};
  border: ${(props) => props.theme.buttons[props.variant].border};
  padding: ${(props) => props.theme.buttons[props.variant].padding};
  color: ${(props) => props.theme.buttons[props.variant].color};
  cursor: ${(props) => props.theme.buttons[props.variant].cursor};
  background-color: ${(props) =>
    props.theme.buttons[props.variant]["background-color"]};
  ${mobile({ width: "100%" })};
`;
