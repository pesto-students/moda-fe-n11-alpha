import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function usePopulatProductHook() {
  const navigate = useNavigate();
  const popularProducts = useSelector((state) => state.home.PopularProduct);
  const email = useSelector((state) => state.user.email);
  const row1 = popularProducts?.slice(0, 3);
  const row2 = popularProducts?.slice(3, 5);

  return [row1, row2];
}

export default usePopulatProductHook;
