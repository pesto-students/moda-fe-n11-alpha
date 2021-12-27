import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClearAllCartItems } from "../../redux/slices/CartSlice.js";
import { useDispatch } from "react-redux";

function Payment() {
  const { state } = useLocation();
  const { email, cart, amount } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handletoken = async (email, cart, amount) => {
    dispatch(ClearAllCartItems());
    try {
      const res = await axios.post("/pay", {
        email,
        cart,
        amount,
      });
      toast.success(
        "Payment successfull.Order will be delivered in Please contact with +918888888888 for address change or delivery related query."
      );
      navigate("/");
      dispatch(ClearAllCartItems());
      return res;
    } catch (ex) {
      toast.error("Payment failed.Please retry");
      console.log(ex.message);
    }
  };
  const tokenHandler = async (token) => {
    await handletoken(email, cart, amount);
  };
  return (
    <div>
      <Stripe
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HEkGDUMc-GgjJJpqGoCpVqgV-itncYyDqg&usqp=CAU"
        description="MODA STORE"
        stripeKey={
          "pk_test_51K7O43SH8uD8r3wjdMm61xQCnHrVwoL7k7KfWrzsqM1iGl8hQCWIs4Y6Bt2QTsXLDFJxFlVH6yI6r48TdwI4QoMf00hz9uAETB"
        }
        token={tokenHandler}
      ></Stripe>
    </div>
  );
}

export default Payment;
