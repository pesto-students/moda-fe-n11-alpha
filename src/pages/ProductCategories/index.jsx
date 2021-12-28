import { Product, FilterCheckbox } from "../../components";
import {
  Title,
  FilterContainer,
  FilterGroup,
  Filter,
  FilterText,
  Select,
  Option,
  ProductContainer,
} from "./styles";
import useProductCategoriesHook from "./useProductCategoriesHook";

function ProductCategories() {
  const [
    handleColorChange,
    colorOptions,
    handleSizeChange,
    sizeOptions,
    products,
    genderOptions,
    handleGenderChange,
  ] = useProductCategoriesHook();
  return (
    <>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Search Filters:</FilterText>
          <FilterGroup>
            <FilterCheckbox
              header="color"
              handleEvent={handleColorChange}
              selectOptions={colorOptions}
            />
            <FilterCheckbox
              header="size"
              handleEvent={handleSizeChange}
              selectOptions={sizeOptions}
            />
            <FilterCheckbox
              header="gender"
              handleEvent={handleGenderChange}
              selectOptions={genderOptions}
            />
          </FilterGroup>
        </Filter>
        <Filter>
          <FilterText>Product Sort Filter:</FilterText>
          <Select>
            <Option defaultValue={""}>Sort Products</Option>
            <Option>Latest(asc)</Option>
            <Option>Latest(desc)</Option>
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
