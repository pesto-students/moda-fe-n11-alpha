import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import {
  Container,
  Wrapper,
  Left,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <BsSearch></BsSearch>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MODA.</Logo>
        </Center>
        <Right>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <GrCart />
          </MenuItem>
        </Right>
      </Wrapper>

      <SearchContainer mobileView>
        <Input />
        <BsSearch></BsSearch>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
