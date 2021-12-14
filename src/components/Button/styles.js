import styled from "styled-components";
import { mobile } from "../../responsive";

export const CustomButton = styled.button`
  width: ${(props) => props.theme.buttons[props.variant].width};
  border: ${(props) => props.theme.buttons[props.variant].border};
  padding: ${(props) => props.theme.buttons[props.variant].padding};
  color: ${(props) => props.theme.buttons[props.variant].color};
  cursor: ${(props) => props.theme.buttons[props.variant].cursor};
  background-color: ${(props) =>
    props.theme.buttons[props.variant]["background-color"]};
  display: ${(props) => props.theme.buttons[props.variant].display};
  margin-top: ${(props) => props.theme.buttons[props.variant]["margin-top"]};
  ${mobile({ width: "100%" })};
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px ${(props) => props.theme.color.backgroundgrey};
    /* Lowering the shadow */
  }
`;
