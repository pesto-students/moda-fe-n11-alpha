import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AddproductInCart } from "../../redux/slices/CartSlice";

function useProductDescHook() {
  const [ProductDetails, setProductDetails] = useState({});
  const [selectColor, setSelectColor] = useState("red");
  const [selectSize, setSelectSize] = useState("sm");
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state?.user?.email);
  const navigate = useNavigate();

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
    if (email) {
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
    } else {
      toast.success("Please register before adding to cart");
      navigate("/signup");
    }
  };
  useEffect(() => {
    fetchSingleProduct(id)
      .then((p) => setProductDetails(p))
      .catch((err) => console.log(err.message));
  }, [id]);

  return [
    ProductDetails,
    selectColor,
    setSelectColor,
    selectSize,
    setSelectSize,
    qty,
    setQty,
    handleAddToCart,
  ];
}

export default useProductDescHook;
