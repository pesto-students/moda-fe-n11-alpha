import styled from "styled-components";
import { mobile } from "../../responsive";

export const Title = styled.h1`
  margin-left: 1rem;
`;
export const FilterContainer = styled.aside`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  ${mobile({ flexDirection: "column" })};
`;
export const Filter = styled.section``;
export const FilterText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const FilterGroup = styled.div`
  display: inline-block;
`;
export const Select = styled.select`
  padding: 5px;
  border: 1px solid blue;
  ${mobile({ marginTop: "5px" })}
`;
export const Option = styled.option``;
export const ProductContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
