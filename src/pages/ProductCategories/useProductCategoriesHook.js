import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateFilterAndUpdateProducts } from "../../redux/slices/FilterSlice";

function useProductCategoriesHook() {
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
  const genderOptions = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
  ];
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const text = useSelector((state) => state.filter.text);
  const products = useSelector((state) => state.product);
  const [colorFilter, setColorFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);

  const handleColorChange = (color) => {
    setPage((page) => 1);
    setColorFilter(color);
  };
  const handleSizeChange = (size) => {
    setPage((page) => 1);
    setSizeFilter(size);
  };
  const handleGenderChange = (gender) => {
    setPage((page) => 1);
    setGender(gender);
  };

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    dispatch(
      UpdateFilterAndUpdateProducts({
        color: colorFilter,
        size: sizeFilter,
        text,
        gender,
        page,
      })
    );
    navigate(
      `/ProductCategories?color=${colorFilter}&size=${sizeFilter}&text=${text}&gender=${gender}&page=${page}`
    );
  }, [colorFilter, sizeFilter, dispatch, navigate, text, gender, page]);

  return [
    handleColorChange,
    colorOptions,
    handleSizeChange,
    sizeOptions,
    products,
    genderOptions,
    handleGenderChange,
  ];
}

export default useProductCategoriesHook;
