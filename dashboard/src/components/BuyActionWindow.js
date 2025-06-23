import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(""); // store as string
  const [stockPrice, setStockPrice] = useState("");       // store as string
  const { closeBuyWindow } = useContext(GeneralContext);  // ✅ proper usage

  const handleBuyClick = () => {
    const qtyNum = Number(stockQuantity);
    const priceNum = Number(stockPrice);

    if (qtyNum <= 0 || priceNum <= 0 || isNaN(qtyNum) || isNaN(priceNum)) {
      alert("Please enter valid quantity and price.");
      return;
    }

    axios
      .post("http://localhost:3002/newOrder", {
        name: uid,
        qty: qtyNum,
        price: priceNum,
        mode: "BUY",
      })
      .then((res) => {
        console.log("Order placed:", res.data);
        closeBuyWindow();
      })
      .catch((err) => {
        console.error("Error placing order:", err);
        alert("Failed to place order. Please try again.");
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ closes window
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
