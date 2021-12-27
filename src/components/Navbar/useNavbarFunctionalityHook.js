import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";
import { LogOutUserInStore } from "../../redux/slices/UserSlice";
import { ClearAllCartItems } from "../../redux/slices/CartSlice";

function useNavbarFunctionality() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    text: textSearch,
    color,
    size,
    gender,
  } = useSelector((state) => state.filter);
  const { email } = useSelector((state) => state.user);
  const [text, setText] = useState("");
  let Location = useLocation();
  console.log("this is location", Location);
  let timer = () => {};
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
  const debounceSearch = (e) => {
    console.log("debounce method is called");
    setText(e.target.value);
    if (Location.pathname === "/ProductCategories") {
      timer = setTimeout(() => {
        dispatch(UpdateFilterAndUpdateProducts({ text, color, size, gender }));
      }, 3000);
    }
  };
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [text, handleTextClick, email, textSearch, Logout, debounceSearch];
}

export default useNavbarFunctionality;
