import React from "react";
import { CustomButton } from "./styles";

function Button({ children, variant = "colored", ...props }) {
  return (
    <CustomButton variant={variant} {...props}>
      {children}
    </CustomButton>
  );
}

export default Button;
