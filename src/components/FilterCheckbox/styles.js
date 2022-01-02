import styled from "styled-components";
import { mobile } from "../../responsive";
export const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
  border: 1px solid blue;
  ${mobile({ marginTop: "5px" })}
`;
export const Option = styled.option``;
