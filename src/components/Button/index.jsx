import React from "react";
import { CustomButton } from "./styles";

function Button({ children, variant }) {
  return <CustomButton variant={variant}>{children}</CustomButton>;
}

export default Button;
