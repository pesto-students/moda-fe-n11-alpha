import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../../components/Product";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";
import {
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  ProductContainer,
} from "./styles";
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
  }, [colorFilter, sizeFilter, dispatch, navigate, text]);

  return (
    <>
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
          products.map(({ _id, name, images, size, color }) => (
            <Product
              key={_id}
              name={name}
              size={size[0]}
              color={color[0]}
              img={images.split("~")[0]}
              id={_id}
            />
          ))}
      </ProductContainer>
    </>
  );
}

export default ProductCategories;
