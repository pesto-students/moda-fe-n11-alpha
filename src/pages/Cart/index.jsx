import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";
import Announcements from "../../components/Announcements";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { mobile } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteproductInCart,
  IncProductInCart,
  DecProductInCart,
} from "../../redux/slices/CartSlice";

import React from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "flex" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  & #deleteIcon {
    position: absolute;
    top: 0%;
    right: 5%;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "0px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container>
      <Navbar />
      <Announcements />
      {cart.length ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cart.length})</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
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
                            console.log("delete button clicked");
                            dispatch(
                              DeleteproductInCart({
                                id,
                                color,
                                size,
                              })
                            );
                          }}
                        />
                        <ProductAmountContainer>
                          <span
                            onClick={(e) => {
                              dispatch(IncProductInCart({ id, color, size }));
                              // setQty((q) => {
                              //   if (q > 2) return q - 1;
                              //   else return 1;
                              // });
                            }}
                          >
                            <AiOutlinePlus />
                          </span>
                          <ProductAmount>{quantity}</ProductAmount>
                          <span
                            onClick={(e) => {
                              if (quantity >= 2) {
                                dispatch(DecProductInCart({ id, color, size }));
                              } // setQty((q) => {
                              //   if (q > 2) return q - 1;
                              //   else return 1;
                              // });
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
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
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
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      ) : (
        <Title>Your Bag is Empty</Title>
      )}
      <Footer />
    </Container>
  );
};

export default Cart;
