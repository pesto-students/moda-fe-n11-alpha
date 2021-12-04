import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #e7cbcb14;
  display: flex;
  justify-content: space-between;
  text-align: center;
  ${mobile({ flexDirection: "column" })}
`;
export const Left = styled.div`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
export const Logo = styled.h1``;
export const Desc = styled.p``;
export const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
`;
export const Center = styled.div`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
export const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: bolder;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
`;
export const Right = styled.div`
  flex: 1;
  ${mobile({ alignItems: "center", border: "1px solid #ecd5d533" })}
`;
export const ContactItem = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
