import { data } from "../../Data";
import { useState } from "react";
function useCarousalHook() {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    let len = 0;
    if (direction === "right")
      len = slideIndex + 1 < data.length ? slideIndex + 1 : 0;
    else if (direction === "left")
      len = slideIndex - 1 < 0 ? data.length - 1 : slideIndex - 1;
    setslideIndex(len);
  };
  return [slideIndex, handleClick];
}
export default useCarousalHook;
