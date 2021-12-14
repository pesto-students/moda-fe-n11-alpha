import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Announcements from "../../components/Announcements";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { mobile } from "../../responsive";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddproductInCart } from "../../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  ${mobile({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 0.5rem;
  flex: 1;
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 2.5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
`;
const Desc = styled.div`
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
  margin-top: 20px;
`;
const Price = styled.div`
  margin-top: 1rem;
  font-weight: 200;
  font-size: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 1.5rem;
  font-weight: 400;
  border: 1px solid teal;
  background-color: white;
  margin-right: 20px;
  margin-top: 25px;
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;

const FilterTitle = styled.h2``;

const FilterCover = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 20%;
  border: ${(props) =>
    props.selected === props.data ? "1px solid teal" : "1px solid lightgrey"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: rgba(136, 128, 128, 0.055);
  }
`;
const Filter = styled.div`
  height: 80%;
  width: 80%;
  background-color: ${(props) => props.color};
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
const AmountContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Quantity = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  padding: 0;
`;

const Amount = styled.div`
  border: 1px solid teal;
  border-radius: 25%;
  width: 30px;
  text-align: center;
`;

const ProductDescription = () => {
  const [ProductDetails, setProductDetails] = useState({});
  const [selectColor, setSelectColor] = useState("red");
  const [selectSize, setSelectSize] = useState("sm");
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state?.user?.email);
  const fetchSingleProduct = async (id) => {
    const res = await axios.get(`product/${id}`);
    return res.data;
  };
  const checkIfProductAlreadyExists = () => {
    for (let item of cart) {
      if (item.id === ProductDetails._id) {
        if (item.color === selectColor) {
          if (item.size === selectSize) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const handleAddToCart = () => {
    if (checkIfProductAlreadyExists()) {
      let data = {};
      data["id"] = ProductDetails._id;
      data["name"] = ProductDetails.name;
      data["image"] = ProductDetails["images"].split("~")[0];
      data["quantity"] = qty;
      data["color"] = selectColor;
      data["size"] = selectSize;
      dispatch(AddproductInCart(email, data));
    }
  };
  useEffect(() => {
    fetchSingleProduct(id)
      .then((p) => setProductDetails(p))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <Announcements />
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDescription;
