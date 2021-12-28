import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.main`
  display: flex;
  gap: 2rem;
  ${mobile({ flexDirection: "column" })}
`;
export const InfoContainer = styled.article`
  flex: 2.5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const ImgContainer = styled.figure`
  border: 1px solid lightgrey;
  margin: 0.5rem;
  flex: 1;
`;
export const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;
export const Desc = styled.article`
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
  margin-top: 20px;
`;
export const Price = styled.section`
  margin-top: 1rem;
  font-weight: 200;
  font-size: 30px;
`;
export const FilterContainer = styled.section`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 1.5rem;
  font-weight: 400;
  border: 1px solid teal;
  background-color: white;
  margin-right: 20px;
  margin-top: 25px;
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;

export const FilterTitle = styled.h2``;

export const FilterCover = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 20%;
  border: ${(props) =>
    props.selected === props.data ? "1px solid teal" : "1px solid lightgrey"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;
export const Filter = styled.div`
  height: 80%;
  width: 80%;
  background-color: ${(props) => props.color};
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
export const AmountContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Quantity = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  padding: 0;
`;

export const Amount = styled.div`
  border: 1px solid teal;
  border-radius: 25%;
  width: 30px;
  text-align: center;
`;
