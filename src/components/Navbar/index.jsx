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
  CartContainer,
} from "./styles";

import { Link } from "react-router-dom";
import useNavbarFunctionality from "./useNavbarFunctionalityHook";
const Navbar = () => {
  const [
    text,
    handleTextClick,
    email,
    textSearch,
    Logout,
    debounceSearch = () => {},
  ] = useNavbarFunctionality();
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
              onChange={debounceSearch}
              placeholder="Search"
            />
            <BsSearch size={20} onClick={handleTextClick}></BsSearch>
          </SearchContainer>
        </Center>
        <Right>
          {!email ? (
            <>
              <MenuItem>
                <Link to="/signin">SignIn</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/signup">Register</Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <div
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </div>
              </MenuItem>
              <MenuItem>
                <Link to="/order">Orders</Link>
              </MenuItem>
            </>
          )}
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
          onChange={debounceSearch}
          placeholder="Search"
        />
        <BsSearch size={20} onClick={handleTextClick}></BsSearch>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
