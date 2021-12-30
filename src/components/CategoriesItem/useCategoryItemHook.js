import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";

function useCategoryItemHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchText = (text) => {
    switch (text) {
      case "SHIRT STYLE": {
        return "SHIRT";
      }
      case "LOUNGEWEAR LOVE": {
        return "LOUNGE";
      }
      case "LIGHT SHORTS": {
        return "SHORTS";
      }
      default:
        return "";
    }
  };
  const handleTextClick = (text) => {
    const searchText = getSearchText(text);
    console.log("the search text is as folows****", searchText);
    navigate(`/ProductCategories?text=${searchText}`);

    dispatch(
      UpdateFilterAndUpdateProducts({
        text: searchText,
        color: "",
        size: "",
        gender: "",
      })
    );
  };
  return [handleTextClick];
}

export default useCategoryItemHook;
