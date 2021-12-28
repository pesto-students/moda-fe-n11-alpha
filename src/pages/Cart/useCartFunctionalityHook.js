import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteproductInCart,
  IncProductInCart,
  DecProductInCart,
} from "../../redux/slices/CartSlice";
function useCartFunctionalityHook() {
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToProductcategories = () => {
    navigate("/ProductCategories");
  };
  const navigateToPayment = () => {
    navigate("/payment");
  };
  const deleteProductinCart = (email, id, color, size) => {
    dispatch(
      DeleteproductInCart({
        email,
        id,
        color,
        size,
      })
    );
  };
  const increaseProductInCart = (email, id, color, size) => {
    dispatch(IncProductInCart({ email, id, color, size }));
  };
  const decreaseProductInCart = (email, id, color, size) => {
    dispatch(DecProductInCart({ email, id, color, size }));
  };
  return [
    cart,
    email,
    navigateToProductcategories,
    navigateToPayment,
    deleteProductinCart,
    increaseProductInCart,
    decreaseProductInCart,
  ];
}

export default useCartFunctionalityHook;
