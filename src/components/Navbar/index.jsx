import { BsSearch } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import {
  CartContainer,
  Center,
  Container,
  Input,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
  CartCount,
} from './styles';
import useNavbarFunctionality from './useNavbarFunctionalityHook';
const Navbar = () => {
  const [
    text,
    handleTextClick,
    email,
    textSearch,
    Logout,
    debounceSearch = () => {},
    cartCount,
    doesHttpOnlyCookieExist = () => {},
  ] = useNavbarFunctionality();

  console.log(
    '****the cookie is as follows****',
    doesHttpOnlyCookieExist('jwt')
  );
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to='/'>MODA.</Link>
          </Logo>
        </Left>
        <Center>
          <SearchContainer role='search'>
            <Input
              aria-label='globalSearch'
              aria-required='true'
              value={text}
              onChange={debounceSearch}
              placeholder='Search'
            />
            <BsSearch size={20} onClick={handleTextClick}></BsSearch>
          </SearchContainer>
        </Center>
        <Right role='composite'>
          {doesHttpOnlyCookieExist('jwt') ? (
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
                <Link to='/order'>Orders</Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link to='/signin'>SignIn</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/signup'>Register</Link>
              </MenuItem>
            </>
          )}
          <MenuItem>
            <Link to='/cart'>
              <CartContainer>
                <CartCount>{cartCount}</CartCount>
                <GrCart />
              </CartContainer>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>

      <SearchContainer role='search' mobileView>
        <Input
          aria-label='mobileViewglobalSearch'
          aria-required='true'
          value={textSearch}
          onChange={debounceSearch}
          placeholder='Search'
        />
        <BsSearch size={20} onClick={handleTextClick}></BsSearch>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
