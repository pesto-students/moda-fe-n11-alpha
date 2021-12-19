import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function Payment() {
  const handletoken = async (totalAmount, token) => {
    try {
      axios.post("/pay", {
        token: token.id,
        amount: totalAmount,
      });
    } catch (ex) {
      console.log(ex.message);
    }
  };
  const tokenHandler = async (token) => {
    await handletoken(100, token);
  };
  return (
    <div>
      <Stripe
        stripeKey={
          "pk_test_51K7O43SH8uD8r3wjdMm61xQCnHrVwoL7k7KfWrzsqM1iGl8hQCWIs4Y6Bt2QTsXLDFJxFlVH6yI6r48TdwI4QoMf00hz9uAETB"
        }
        token={tokenHandler}
      ></Stripe>
    </div>
  );
}

export default Payment;
