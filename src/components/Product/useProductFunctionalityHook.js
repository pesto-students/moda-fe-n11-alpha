import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddproductInCart } from "../../redux/slices/CartSlice";
import { toast } from "react-toastify";

function useProductFunctionalityHook(img, id, name, color, size) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state?.user?.email);

  const checkIfProductAlreadyExists = () => {
    for (let item of cart) {
      if (item.id === id) {
        return false;
      }
    }
    return true;
  };

  const handleAddToCart = () => {
    if (email) {
      if (checkIfProductAlreadyExists()) {
        let data = {};
        data["id"] = id;
        data["name"] = name;
        data["image"] = img;
        data["quantity"] = 1;
        data["color"] = color;
        data["size"] = size;
        dispatch(AddproductInCart(email, data));
      }
    } else {
      toast.success("Please register before adding to cart");
      navigate("/signup");
    }
  };
  function handleClick() {
    navigate(`/ProductDescription/${id}`);
  }
  return [handleClick, handleAddToCart];
}

export default useProductFunctionalityHook;
