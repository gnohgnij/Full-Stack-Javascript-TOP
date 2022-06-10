import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader, AutoComplete, Badge, Avatar } from "antd";
import "antd/dist/antd.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "../styles/Header.css";

const Header = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const calculateItems = () => {
      let sum = 0;
      for (let i = 0; i < props.cartItems.length; i++) {
        sum += props.cartItems[i].qty;
      }

      setCount(sum);
    };

    calculateItems();
  }, [props.cartItems]);

  return (
    <nav className="header">
      <ul className="header--list">
        <li className="header--list-item">
          <Link to="/">
            <PageHeader title="FakeStore" />
          </Link>
        </li>
        <li className="header--list-item">
          <Badge count={count}>
            <Link to="/cart">
              <Avatar icon={<ShoppingCartOutlined />} />
            </Link>
          </Badge>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
