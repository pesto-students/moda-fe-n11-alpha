import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.footer`
  background-color: #e7cbcb14;
  display: flex;
  justify-content: space-between;
  text-align: center;

  ${mobile({ flexDirection: "column" })}
`;
export const Left = styled.section`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
export const Logo = styled.h1`
    font-size: 30px;
    font-weight: bolder;
}
`;
export const Desc = styled.article`
  font-size: 18px;
  margin-bottom: 10px;
`;
export const SocialIconContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Center = styled.section`
  flex: 1;
  ${mobile({ border: "1px solid #ecd5d533" })}
`;
export const Title = styled.h1`
  font-size: 30px;
  font-weight: bolder;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
`;
export const ListItem = styled.li`
  width: 50%;
`;
export const Right = styled.section`
  flex: 1;
  font-size: 18px;
  ${mobile({ alignItems: "center", border: "1px solid #ecd5d533" })}
`;
export const ContactItem = styled.section`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
