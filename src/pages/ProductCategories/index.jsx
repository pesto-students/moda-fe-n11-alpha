import Announcements from "../../components/Announcements";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";
import { useNavigate } from "react-router-dom";

const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 15px;
  margin-left: 10px;
  border: 1px solid blue;
`;
const Option = styled.option``;
const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & div {
    margin: 0.5rem 0;
  }
`;
function ProductCategories() {
  const colorOptions = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
    { label: "yellow", value: "yellow" },
    { label: "black", value: "black" },
    { label: "white", value: "white" },
  ];
  const sizeOptions = [
    { label: "sm", value: "sm" },
    { label: "m", value: "m" },
    { label: "l", value: "l" },
    { label: "xl", value: "xl" },
    { label: "xxl", value: "xxl" },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const text = useSelector((state) => state.filter.text);

  const products = useSelector((state) => state.product);

  const [colorFilter, setColorFilter] = useState("");

  const [sizeFilter, setSizeFilter] = useState("");

  const handleColorChange = (color) => {
    setColorFilter(color);
  };
  const handleSizeChange = (size) => {
    setSizeFilter(size);
  };

  useEffect(() => {
    dispatch(
      UpdateFilterAndUpdateProducts({
        color: colorFilter,
        size: sizeFilter,
        text,
      })
    );
    navigate(
      `/ProductCategories?color=${colorFilter}&size=${sizeFilter}&text=${text}`
    );
  }, [colorFilter, sizeFilter, dispatch]);

  return (
    <>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Product Search Filter:</FilterText>
          <Select onChange={(e) => handleColorChange(e.target.value)}>
            <Option value={""} defaultValue={""}>
              Color
            </Option>
            {colorOptions.map((color) => (
              <Option key={color.label} value={color.value}>
                {color.label}
              </Option>
            ))}
          </Select>
          <Select onChange={(e) => handleSizeChange(e.target.value)}>
            <Option value={""} defaultValue={""}>
              Size
            </Option>
            {sizeOptions.map((size) => (
              <Option key={size.label} value={size.value}>
                {size.label}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Product Sort Filter:</FilterText>
          <Select>
            <Option defaultValue={""}>Sort Products</Option>
            <Option>Newest(asc)</Option>
            <Option>Newest(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        {products &&
          products.map(({ _id, images }) => (
            <Product key={_id} img={images.split("~")[0]} id={_id} />
          ))}
      </ProductContainer>
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductCategories;
