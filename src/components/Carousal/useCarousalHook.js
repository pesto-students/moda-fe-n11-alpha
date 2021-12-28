import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
function useCarousalHook() {
  const navigate = useNavigate();
  const [slideIndex, setslideIndex] = useState(0);
  const data = useSelector((state) => state.home.SaleAndOffer);

  const handleClick = (direction) => {
    let len = 0;
    if (direction === "right") {
      len = slideIndex + 1 < data?.length ? slideIndex + 1 : 0;
    } else if (direction === "left") {
      len = slideIndex - 1 < 0 ? data?.length - 1 : slideIndex - 1;
    }
    setslideIndex(len);
  };

  function handleBtnClick() {
    navigate(`/ProductCategories`);
  }

  return [data, handleBtnClick, slideIndex, handleClick];
}
export default useCarousalHook;
