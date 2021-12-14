import { useState } from "react";
import { LogUserInStore } from "../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartForUser } from "../../redux/slices/CartSlice";

function useSignInHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (formData["email"] === "" || formData["password"] === "") {
      console.log(formData);
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
        await dispatch(LogUserInStore(formData));
        navigate("/");
        dispatch(getCartForUser(formData["email"]));
      } catch (e) {
        console.log(e.message);
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

export default useSignInHook;
