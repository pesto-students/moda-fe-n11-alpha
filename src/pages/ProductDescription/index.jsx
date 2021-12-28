import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  Amount,
  AmountContainer,
  BtnContainer,
  Button,
  Desc,
  Filter,
  FilterContainer,
  FilterCover,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Quantity,
  Title,
  Wrapper,
} from "./styles";
import useProductDescHook from "./useProductDescHook";
const ProductDescription = () => {
  const [
    ProductDetails,
    selectColor,
    setSelectColor,
    selectSize,
    setSelectSize,
    qty,
    setQty,
    handleAddToCart,
  ] = useProductDescHook();
  return (
    <Wrapper>
      <ImgContainer>
        <Image src={ProductDetails?.images?.split("~")[0]} />
      </ImgContainer>
      <InfoContainer>
        <Title>{ProductDetails.name}</Title>
        <Desc>{ProductDetails.description}</Desc>
        <Price>Price: 2$</Price>
        <FilterContainer>
          <FilterTitle>Colors</FilterTitle>
          {ProductDetails?.color?.map((col) => {
            return (
              <FilterCover
                key={col}
                selected={selectColor}
                data={col}
                onClick={(e) => setSelectColor(col)}
              >
                <Filter color={col} />
              </FilterCover>
            );
          })}
        </FilterContainer>
        <FilterContainer>
          <FilterTitle>Size</FilterTitle>
          {ProductDetails?.size?.map((sz) => {
            return (
              <FilterCover
                key={sz}
                selected={selectSize}
                data={sz}
                onClick={(e) => {
                  setSelectSize(sz);
                }}
              >
                <Filter>{sz}</Filter>
              </FilterCover>
            );
          })}
        </FilterContainer>
        <AmountContainer>
          <FilterTitle>Amount</FilterTitle>
          <Quantity>
            <AiOutlinePlus
              onClick={(e) => {
                setQty((q) => q + 1);
              }}
            />
            <Amount>{qty}</Amount>
            <AiOutlineMinus
              onClick={(e) => {
                setQty((q) => {
                  if (q > 2) return q - 1;
                  else return 1;
                });
              }}
            />
          </Quantity>
        </AmountContainer>
        <BtnContainer>
          <Button>Buy Now</Button>
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </BtnContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default ProductDescription;
