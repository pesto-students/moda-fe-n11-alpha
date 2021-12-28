import React from "react";
import CheckBox, { Container } from "./styles";
import useCheckBoxHook from "./useCheckBoxHook";
function Checkbox({ children, dispatch, data }) {
  const handleCheckboxChange = useCheckBoxHook(dispatch);
  return (
    <Container>
      <label>
        <CheckBox
          checked={data ? true : false}
          onChange={handleCheckboxChange}
        />
        <span style={{ marginLeft: 8 }}>{children}</span>
      </label>
    </Container>
  );
}

export default Checkbox;
