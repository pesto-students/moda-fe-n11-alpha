import React from "react";
import {
  Button,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
} from "./styles";
function CartSummary({
  navigateToPayment,
  calculateSubTotal,
  calculateTotal,
  cart,
}) {
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice> $ {calculateSubTotal()}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>$ {calculateTotal(0, 0)}</SummaryItemPrice>
      </SummaryItem>
      <Button
        onClick={() => {
          console.log(navigateToPayment);
          navigateToPayment(cart, calculateTotal(0, 0));
        }}
      >
        CHECKOUT NOW
      </Button>
    </Summary>
  );
}

export default CartSummary;
