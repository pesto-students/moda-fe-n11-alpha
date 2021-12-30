import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";
import { LogOutUserInStore } from "../../redux/slices/UserSlice";
import { ClearAllCartItems } from "../../redux/slices/CartSlice";
import { debounce } from "lodash";

function useNavbarFunctionality() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    text: textSearch,
    color,
    size,
    gender,
  } = useSelector((state) => state.filter);
  const cart = useSelector((state) => state.cart);

  const { email } = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const [cartCount, setcartCount] = useState(0);

  let Location = useLocation();

  useEffect(() => {
    if (textSearch !== text) {
      setText(textSearch);
    }
  }, [textSearch]);
  useEffect(() => {
    const cartCount = cart.reduce((total, item) => {
      return total + item?.quantity;
    }, 0);
    setcartCount(cartCount);
  }, [cartCount, cart]);

  const Logout = () => {
    dispatch(LogOutUserInStore());
    dispatch(ClearAllCartItems());
    navigate("/");
  };

  const handleTextClick = (e) => {
    navigate(`/ProductCategories?text=${text}`);
    if (text !== textSearch) {
      dispatch(UpdateFilterAndUpdateProducts({ text, color, size, gender }));
    }
  };
  const getValue = (val) => {
    dispatch(UpdateFilterAndUpdateProducts({ text: val, color, size, gender }));
  };
  const debounceDropDown = useCallback(
    debounce((val) => getValue(val), 3000),
    []
  );
  const debounceSearch = (e) => {
    setText(e.target.value);
    debounceDropDown(e.target.value);
  };

  return [
    text,
    handleTextClick,
    email,
    textSearch,
    Logout,
    debounceSearch,
    cartCount,
  ];
}

export default useNavbarFunctionality;
