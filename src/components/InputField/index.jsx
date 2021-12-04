import { Input } from "./styles";
function InputField({ placeholder = "", dispatch = () => {}, value = "" }) {
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
    />
  );
}

export default InputField;
