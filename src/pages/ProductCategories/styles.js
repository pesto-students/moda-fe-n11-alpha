import styled from "styled-components";
import { mobile } from "../../responsive";

export const Title = styled.h1``;
export const FilterContainer = styled.aside`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const Filter = styled.section``;
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
export const FilterGroup = styled.div`
  ${mobile({ display: "inline-block" })}
`;
export const Select = styled.select`
  padding: 15px;
  margin-left: 10px;
  border: 1px solid blue;
  ${mobile({ marginTop: "5px" })}
`;
export const Option = styled.option``;
export const ProductContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & div {
    margin: 0.5rem 0;
  }
`;
