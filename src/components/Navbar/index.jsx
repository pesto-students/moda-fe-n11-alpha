import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { useState } from "react";

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
  CartContainer,
  CartCounter,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    text: textSearch,
    color,
    size,
  } = useSelector((state) => state.filter);
  const [text, setText] = useState("");

  const handleTextClick = (e) => {
    navigate(`/ProductCategories?text=${text}`);
    if (text !== textSearch) {
      dispatch(UpdateFilterAndUpdateProducts({ text, color, size }));
    }
  };
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
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search"
            />
            <BsSearch size={20} onClick={handleTextClick}></BsSearch>
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
              <CartContainer>
                <GrCart />
              
              </CartContainer>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>

      <SearchContainer mobileView>
        <Input
          value={textSearch}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search"
        />
        <BsSearch size={20} onClick={handleTextClick}></BsSearch>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
