import styled from "styled-components";
export const Title = styled.h1``;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Filter = styled.div``;
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Select = styled.select`
  padding: 15px;
  margin-left: 10px;
  border: 1px solid blue;
`;
export const Option = styled.option``;
export const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & div {
    margin: 0.5rem 0;
  }
`;
