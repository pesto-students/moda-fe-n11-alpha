import { useState } from "react";

function useCheckBoxHook(dispatch) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    dispatch((state) => {
      return { ...state, agreement: event.target.checked };
    });
  };
  return handleCheckboxChange;
}

export default useCheckBoxHook;
