import { Option, Select } from "./styles";

function FilterCheckbox({ header, handleEvent, selectOptions }) {
  return (
    <Select onChange={(e) => handleEvent(e.target.value)}>
      <Option value={""} defaultValue={""}>
        {header}
      </Option>
      {selectOptions?.map((color) => (
        <Option key={color.label} value={color.value}>
          {color.label}
        </Option>
      ))}
    </Select>
  );
}

export default FilterCheckbox;
