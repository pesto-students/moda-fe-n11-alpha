import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
export const TopTexts = styled.div`
  ${mobile({ display: "flex" })}
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const Info = styled.div`
  flex: 3;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  & #deleteIcon {
    position: absolute;
    top: 0%;
    right: 5%;
  }
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "0px" })}
`;
export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span``;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
