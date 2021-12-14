import { Input } from "./styles";
function InputField({
  placeholder = "",
  dispatch = () => {},
  value = "",
  type = "text",
}) {
  const handleTextboxChange = (event) => {
    dispatch((state) => {
      let newState = { ...state };
      newState[placeholder] = event.target.value;
      return newState;
    });
  };

  return (
    <Input
      placeholder={placeholder}
      onChange={handleTextboxChange}
      value={value}
      type={type}
    />
  );
}

export default InputField;
