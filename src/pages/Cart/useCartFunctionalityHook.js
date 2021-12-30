import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteproductInCart,
  IncProductInCart,
  DecProductInCart,
} from "../../redux/slices/CartSlice";
import { getCartForUser } from "../../redux/slices/CartSlice";
function useCartFunctionalityHook() {
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToProductcategories = () => {
    navigate("/ProductCategories");
  };
  useEffect(() => {
    dispatch(getCartForUser());
  }, [dispatch]);

  const calculateSubTotal = () => {
    let total = 0;
    for (let item of cart) {
      total += item.quantity * 2;
    }
    return total;
  };
  const calculateTotal = (shippingCost, shippingDiscount) => {
    return calculateSubTotal() + shippingCost - shippingDiscount;
  };

  const navigateToPayment = (cart, amount) => {
    navigate("/payment", { state: { email, cart, amount } });
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
    calculateSubTotal,
    calculateTotal,
  ];
}

export default useCartFunctionalityHook;
