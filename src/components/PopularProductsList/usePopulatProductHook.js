import { useSelector } from "react-redux";

function usePopulatProductHook() {
  const popularProducts = useSelector((state) => state.home.PopularProduct);

  const row1 = popularProducts?.slice(0, 3);
  const row2 = popularProducts?.slice(3, 5);

  return [row1, row2];
}

export default usePopulatProductHook;
