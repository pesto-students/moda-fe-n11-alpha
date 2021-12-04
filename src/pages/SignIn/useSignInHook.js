import { useState } from "react";

function useSignInHook() {
  const [formData, SetFormData] = useState({
    username: "",
    password: "",
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (formData["username"] === "" || formData["password"] === "") {
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
  const HandleFormData = (e) => {
    setError({});
    e.preventDefault();
    ValidateForm();
    if (Object.keys(Error).length === 0) {
      console.log(Object.keys(Error).length);
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
