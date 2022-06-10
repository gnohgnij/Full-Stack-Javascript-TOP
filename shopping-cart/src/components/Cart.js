import React from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";

import Header from "./Header";
import "../styles/Cart.css";

const { Column } = Table;

const Cart = (props) => {
  let tableVal = [];
  props.cartItems.forEach((item, index) => {
    const name = item.name;
    const itemObj = props.items.find((obj) => obj.title === name);
    const price = item.qty * itemObj.price;
    tableVal.push({
      key: index,
      item: name,
      quantity: item.qty,
      price: `\$${price}`,
    });
  });

  return (
    <div>
      <Header cartItems={props.cartItems} />
      <div className="cart">
        <Table dataSource={tableVal}>
          <Column title="Item" dataIndex="item" key="item" />
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column
            title="Action"
            key="item"
            render={(_, record) => (
              <Button size="small" onClick={props.deleteItemFromCart}>
                Delete
              </Button>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default Cart;
