import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  cursor: pointer;
  ${mobile({ width: "100vw", height: "100%" })};
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
/* Adding components to the left side */
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "space-evenly" })}
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: ${(props) => (props.mobileView ? "none" : "flex")};
  align-items: center;
  margin-left: 25px;
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
