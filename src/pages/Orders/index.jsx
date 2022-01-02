import React from "react";
import { OrderCard, Tag } from "./styles";
import withNavbarFooterHOC from "../../hoc/withNavbarFooterHOC";
import useOrderHook from "./useOrderHook";

function Orders() {
  const [orders] = useOrderHook();

  return (
    <>
      <h1>Orders Page</h1>
      <Tag>
        All the delivery related query and assistence can be provided on +91
        88888888
      </Tag>
      <section>
        <h2>Placed Orders</h2>

        {orders?.map(({ _id, products, amount }) => {
          return (
            <OrderCard key={_id}>
              <div>OrderId:{_id}</div>
              {products?.map(({ productName, quantity }) => {
                return (
                  <div
                    key={productName}
                  >{`${productName}   X   ${quantity}`}</div>
                );
              })}
              <div>TotalAmount:{`${amount} $`}</div>
            </OrderCard>
          );
        })}
      </section>
    </>
  );
}

export default withNavbarFooterHOC(Orders);
