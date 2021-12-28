import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AddUserInStore } from "../../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
function useSignUpHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, SetFormData] = useState({
    username: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    "confirm password": "",
    agreement: false,
  });

  const [Error, setError] = useState({});

  const ValidateForm = () => {
    if (
      formData["username"] === "" ||
      formData["address"] === "" ||
      formData["phoneNumber"] === "" ||
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
  const HandleFormData = async (e) => {
    console.log("***formData", formData);
    try {
      setError({});
      e.preventDefault();
      ValidateForm();
      if (Object.keys(Error).length === 0) {
        await dispatch(AddUserInStore(formData));
        toast.success("signup successfull");
        navigate("/");
      }
    } catch (e) {
      console.log("error caught", e);
      toast.error("Duplicate user.Please try logging in");
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
