import React, { useEffect, useState } from "react";

import Header from "./Header";
import ItemGrid from "./ItemGrid";

const Home = (props) => {
  return (
    <>
      <Header cartItems={props.cartItems} />
      <ItemGrid
        items={props.items}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        itemQuantity={props.itemQuantity}
      />
    </>
  );
};

export default Home;
