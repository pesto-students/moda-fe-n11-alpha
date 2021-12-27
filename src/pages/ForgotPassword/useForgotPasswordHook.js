import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { post } from "../../api/ForgotEmailApi";
function useForgotPasswordHook() {
  const [formData, SetFormData] = useState({
    email: "",
  });
  const [Error, setError] = useState({});
  const navigate = useNavigate();

  const ValidateForm = () => {
    if (formData["email"] === "") {
      setError((state) => {
        return {
          ...state,
          incompleteForm:
            "All Fields are mandatory.It seems you have some fields not filled",
        };
      });
    }
  };
  const HandleFormData = async (e) => {
    e.preventDefault();
    setError({});
    ValidateForm();
    if (Object.keys(Error).length === 0) {
      try {
        await post(formData["email"]);
        toast.success(
          "OTP has been sent for password reset at your provided email"
        );
        navigate("/enterNewPassword", { state: { email: formData["email"] } });
      } catch (e) {
        toast.error("This email doesnot exist with us. please sign in. ");
        navigate("/signup");
      }
    }
  };
  return [HandleFormData, formData, SetFormData, Error];
}

export default useForgotPasswordHook;
