import React from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

import ItemCard from "./ItemCard";

const ItemGrid = (props) => {
  const findItem = (itemQuantity, itemObj) => {
    let res = itemQuantity.find((item) => item.name === itemObj.title);
    return res.qty;
  };

  let allItems = [];
  for (let i = 0; i < props.items.length; i += 4) {
    const row = (
      <Row key={i}>
        <Col span={6}>
          <ItemCard
            image={props.items[i].image}
            price={props.items[i].price}
            key={props.items[i].title}
            name={props.items[i].title}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            quantity={findItem(props.itemQuantity, props.items[i])}
          />
        </Col>
        <Col span={6}>
          <ItemCard
            image={props.items[i + 1].image}
            price={props.items[i + 1].price}
            key={props.items[i + 1].title}
            name={props.items[i + 1].title}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            quantity={findItem(props.itemQuantity, props.items[i + 1])}
          />
        </Col>
        <Col span={6}>
          <ItemCard
            image={props.items[i + 2].image}
            price={props.items[i + 2].price}
            key={props.items[i + 2].title}
            name={props.items[i + 2].title}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            quantity={findItem(props.itemQuantity, props.items[i + 2])}
          />
        </Col>
        <Col span={6}>
          <ItemCard
            image={props.items[i + 3].image}
            price={props.items[i + 3].price}
            key={props.items[i + 3].title}
            name={props.items[i + 3].title}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            quantity={findItem(props.itemQuantity, props.items[i + 3])}
          />
        </Col>
      </Row>
    );
    allItems.push(row);
  }

  return <>{allItems}</>;
};

export default ItemGrid;
