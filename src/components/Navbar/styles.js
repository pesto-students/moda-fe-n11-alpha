import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.header`
  height: 60px;
  cursor: pointer;
  ${mobile({ width: "100vw", height: "100%" })};
`;
export const Wrapper = styled.nav`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
/* Adding components to the left side */
export const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "space-evenly" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  height: 28px;
  display: ${(props) => (props.mobileView ? "none" : "flex")};
  align-items: center;
  margin-left: 25px;
  margin-bottom: 2px;
  padding: 2px;
  ${mobile({
    display: (props) => (props.mobileView ? "flex" : "none"),
    width: "90vw",
    justifyContent: "space-between",
    marginLeft: "10px",
  })}
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
`;

/* Center side */
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({
    display: "flex",
    justifyContent: "space-evenly",
  })}
`;
export const Logo = styled.h1`
  font-weight: bold;
`;

/* Right Side */
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "space-evenly" })}
`;
export const MenuItem = styled.div`
  margin-right: 10px;
  font-size: ${(props) => props.theme.font.size.medium};
`;
export const CartContainer = styled.div`
  position: relative;
`;
export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  font-size: 11px;
  border-radius: 50%;
  background: #d60b28;
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
`;
