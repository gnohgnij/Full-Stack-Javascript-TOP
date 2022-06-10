import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

import "../styles/ItemCard.css";

const { Meta } = Card;

const ItemCard = (props) => {
  const MetaDescription = () => {
    return (
      <div className="meta-description">
        <div>${props.price}</div>
        <div className="meta-description--cart-buttons">
          <Button size="small" onClick={props.removeFromCart}>
            -
          </Button>
          <div>{props.quantity}</div>
          <Button size="small" onClick={props.addToCart}>
            +
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card
      style={{ paddingTop: "5%" }}
      cover={
        <div className="card--image">
          <img src={props.image} style={{ aspectRatio: "1/1", width: "50%" }} />
        </div>
      }
    >
      <Meta title={props.name} description={<MetaDescription />} />
    </Card>
  );
};

export default ItemCard;
