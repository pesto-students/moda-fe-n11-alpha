import React from "react";
import { CustomButton } from "./styles";

function Button({ children, variant = "colored" }) {
  return <CustomButton variant={variant}>{children}</CustomButton>;
}

export default Button;
