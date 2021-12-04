import { useState } from "react";

function useSignUpHook() {
  const [formData, SetFormData] = useState({
    name: "",
    "last name": "",
    username: "",
    email: "",
    password: "",
    "confirm password": "",
    agreement: false,
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (
      formData["name"] === "" ||
      formData["last name"] === "" ||
      formData["username"] === "" ||
      formData["email"] === "" ||
      formData["password"] === "" ||
      formData["confirm password"] === "" ||
      formData["agreement"] === false
    ) {
      console.log(formData);
      setError((state) => {
        return {
          ...state,
          incompleteForm:
            "All Fields are mandatory.It seems you have some fields not filled",
        };
      });
    }
    if (formData["password"] !== formData["confirm password"]) {
      console.log(formData["password"], formData["confirm password"]);
      setError((state) => {
        return {
          ...state,
          password: "Password and Confirm Password do not match",
        };
      });
    }
  };
  const HandleFormData = (e) => {
    setError({});
    e.preventDefault();
    console.log(formData);
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

export default useSignUpHook;
