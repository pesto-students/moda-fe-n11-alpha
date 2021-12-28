import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { postNewPassword } from "../../api/ForgotEmailApi";

function useEnterNewPassword() {
  const { state } = useLocation();
  const { email } = state;
  console.log("***the email and password are as follows***", state, email);
  const navigate = useNavigate();

  const [formData, SetFormData] = useState({
    otp: "",
    password: "",
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (formData["otp"] === "" || formData["password"] === "") {
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
        await postNewPassword(email, formData["otp"], formData["password"]);
        toast.success("Your password has been updated.Please Login.");
        navigate("/signin");
      } catch (e) {
        toast.error(
          "This email doesnot exist with us. please sign up with new email. "
        );
        navigate("/signup");
      }
    }
  };

  return {
    formData,
    SetFormData,
    HandleFormData,
    Error,
  };
}

export default useEnterNewPassword;
