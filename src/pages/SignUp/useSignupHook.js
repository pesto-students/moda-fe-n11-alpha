import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { AddUserInStore } from "../../redux/slices/UserSlice";

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

  const [Error, setError] = useState();
  useEffect(() => {
    if (Error && Object.keys(Error).length > 0) {
      dispatch(AddUserInStore(formData));
    }
  }, [Error, dispatch, formData]);
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
      console.log("all field are empty");
      setError((state) => {
        return {
          ...state,
          incompleteForm:
            "All Fields are mandatory.It seems you have some fields not filled",
        };
      });
    }
    if (!validator.isEmail(formData["email"])) {
      console.log(formData["email"]);
      setError((state) => {
        return {
          ...state,
          email: "Not a valid email.",
        };
      });
    }
    if (!validator.isMobilePhone(formData["phoneNumber"])) {
      console.log(formData["phoneNumber"]);
      setError((state) => {
        return {
          ...state,
          phoneNumber: "Not a valid phoneNumber.",
        };
      });
    }
    if (formData["password"] !== formData["confirm password"]) {
      setError((state) => {
        return {
          ...state,
          password: "Password and Confirm Password do not match",
        };
      });
    }
    setError((state) => {
      return {
        ...state,
        validation: "Complete",
      };
    });
  };
  const HandleFormData = async (e) => {
    try {
      e.preventDefault();
      ValidateForm();
    } catch (e) {
      toast.error("Duplicate user.Please try logging in");
    }
  };

  return {
    formData,
    SetFormData,
    HandleFormData,
    Error,
    ValidateForm,
  };
}

export default useSignUpHook;
