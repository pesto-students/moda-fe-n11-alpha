import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  } = useSelector((state) => state.filter);
  const { email } = useSelector((state) => state.user);
  const [text, setText] = useState("");

  const Logout = () => {
    dispatch(LogOutUserInStore());
    dispatch(ClearAllCartItems());
    navigate("/");
  };
  const handleTextClick = (e) => {
    navigate(`/ProductCategories?text=${text}`);
    if (text !== textSearch) {
      dispatch(UpdateFilterAndUpdateProducts({ text, color, size }));
    }
  };
  return [text, setText, handleTextClick, email, textSearch, Logout];
}

export default useNavbarFunctionality;
