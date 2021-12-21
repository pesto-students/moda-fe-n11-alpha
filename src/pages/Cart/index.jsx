import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import CartSummary from "./CartSummary";
import {
  Bottom,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper
} from "./styles";
import useCartFunctionalityHook from "./useCartFunctionalityHook";
const Cart = () => {
  const [
    cart,
    email,
    navigateToProductcategories,
    navigateToPayment,
    deleteProductinCart,
    increaseProductInCart,
    decreaseProductInCart,
  ] = useCartFunctionalityHook();
  return (
    <Container>
      {cart.length ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton
              onClick={() => {
                navigateToProductcategories();
              }}
            >
              CONTINUE SHOPPING
            </TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cart.length})</TopText>
            </TopTexts>
            <TopButton
              type="filled"
              onClick={() => {
                navigateToPayment();
              }}
            >
              CHECKOUT NOW
            </TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.map(({ id, name, color, size, image, quantity }) => {
                return (
                  <React.Fragment key={`${id}${color}${size}`}>
                    <Product>
                      <ProductDetail>
                        <Image src={image} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {name}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {id}
                          </ProductId>
                          <ProductColor color={color} />
                          <ProductSize>
                            <b>Size:</b> {size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <RiDeleteBinLine
                          id="deleteIcon"
                          size={30}
                          onClick={() => {
                            deleteProductinCart(email, id, color, size);
                          }}
                        />
                        <ProductAmountContainer>
                          <span
                            onClick={(e) => {
                              increaseProductInCart(email, id, color, size);
                            }}
                          >
                            <AiOutlinePlus />
                          </span>
                          <ProductAmount>{quantity}</ProductAmount>
                          <span
                            onClick={(e) => {
                              if (quantity >= 2) {
                                decreaseProductInCart(email, id, color, size);
                              }
                            }}
                          >
                            <AiOutlineMinus />
                          </span>
                        </ProductAmountContainer>
                        <ProductPrice>{quantity * 2}$</ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </React.Fragment>
                );
              })}
            </Info>
            <CartSummary />
          </Bottom>
        </Wrapper>
      ) : (
        <Title>Your Bag is Empty</Title>
      )}
    </Container>
  );
};

export default Cart;
