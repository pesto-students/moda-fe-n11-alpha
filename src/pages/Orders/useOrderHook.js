import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersForUser } from "../../redux/slices/OrderSlice";

function useOrderHook() {
  const email = useSelector((state) => state.user.email);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersForUser(email));
  }, []);
  return [orders];
}

export default useOrderHook;
