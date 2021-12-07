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
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/">MODA.</Link>
          </Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <BsSearch></BsSearch>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/signin">SignIn</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signup">Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <GrCart />
            </Link>
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
