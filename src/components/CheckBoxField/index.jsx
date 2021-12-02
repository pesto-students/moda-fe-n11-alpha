import React, { useState } from "react";
import CheckBox from "./styles";

function Checkbox({ children, dispatch, data }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    dispatch((state) => {
      return { ...state, agreement: event.target.checked };
    });
  };

  return (
    <div style={{ fontFamily: "system-ui", marginTop: 10 }}>
      <label>
        <CheckBox
          checked={data ? true : false}
          onChange={handleCheckboxChange}
        />
        <span style={{ marginLeft: 8 }}>{children}</span>
      </label>
    </div>
  );
}

export default Checkbox;
