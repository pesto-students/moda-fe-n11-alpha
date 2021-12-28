import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container1 = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  ${mobile({ display: "flex", flexDirection: "column", flexWrap: "nowrap" })};
`;
export const Container2 = styled.div`
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
  grid-template-columns: repeat(2, 1fr);
  ${mobile({ display: "flex", flexDirection: "column", flexWrap: "nowrap" })};
`;
