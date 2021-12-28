import React, { useEffect } from "react";
import { getOrdersForUser } from "../../redux/slices/OrderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Tag, OrderCard } from "./styles";
function Orders() {
  const email = useSelector((state) => state.user.email);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersForUser(email));
  }, []);
  return (
    <>
      <h1>Orders Page</h1>
      <Tag>
        All the delivery related query and assistence can be provided on +91
        88888888
      </Tag>
      <section>
        <h2>Placed Orders</h2>

        {orders.map(({ _id, products, amount }) => {
          return (
            <OrderCard>
              <div>OrderId:{_id}</div>
              {products.map(({ productName, quantity }) => {
                return <div>{`${productName}   X   ${quantity}`}</div>;
              })}
              <div>TotalAmount:{`${amount} $`}</div>
            </OrderCard>
          );
        })}
      </section>
    </>
  );
}

export default Orders;
