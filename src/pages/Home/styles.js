import styled from "styled-components";
import { mobile } from "../../responsive";

export const Heading = styled.h1`
  font-size: 24px;
  margin-left: 10px;
  ${mobile({ flexDirection: "column" })};
`;
