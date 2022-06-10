import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./components/Home";

const RouteSwitch = () => {
  const [items, setItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=16"
      );
      const data = await response.json();
      setItems(data);
      const initialItemCount = data.map((item) => {
        return {
          name: item.title,
          qty: 0,
        };
      });
      setItemQuantity(initialItemCount);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const cartItems = itemQuantity.filter((item) => item.qty > 0);
    setCartItems(cartItems);
  }, [itemQuantity]);

  const addToCart = (event) => {
    const itemName =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.textContent.split(
        "$"
      )[0];

    let arr = itemQuantity;
    let cartObj = arr.find((obj) => obj.name === itemName);
    const index = arr.findIndex((obj) => obj === cartObj);
    arr[index] = {
      name: itemName,
      qty: cartObj.qty + 1,
    };
    setItemQuantity([
      ...itemQuantity.slice(0, index),
      arr[index],
      ...itemQuantity.slice(index + 1),
    ]);
  };

  const removeFromCart = (event) => {
    const itemName =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.textContent.split(
        "$"
      )[0];

    let arr = itemQuantity;
    let cartObj = arr.find((obj) => obj.name === itemName);
    if (cartObj.qty > 0) {
      const index = arr.findIndex((obj) => obj === cartObj);
      arr[index] = {
        name: itemName,
        qty: cartObj.qty - 1,
      };
      setItemQuantity([
        ...itemQuantity.slice(0, index),
        arr[index],
        ...itemQuantity.slice(index + 1),
      ]);
    }
  };

  const deleteItemFromCart = (event) => {
    const nameOfItemToDelete =
      event.target.parentNode.parentNode.parentNode.childNodes[0].textContent;
    const cartItems = itemQuantity.filter((item) => item.qty > 0);
    const newCartItems = cartItems.filter(
      (item) => item.name !== nameOfItemToDelete
    );
    setCartItems(newCartItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              itemQuantity={itemQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              items={items}
              deleteItemFromCart={deleteItemFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
