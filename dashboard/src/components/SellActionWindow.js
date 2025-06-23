import React, { useState } from "react";
import axios from "axios";
import "./BuyActionWindow.css"; // same CSS reused

const SellActionWindow = ({ stock, closeSellWindow }) => {
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleSellClick = () => {
    const qtyNum = Number(stockQuantity);
    const priceNum = Number(stockPrice);

    if (qtyNum <= 0 || priceNum <= 0 || isNaN(qtyNum) || isNaN(priceNum)) {
      alert("Please enter valid quantity and price.");
      return;
    }

    axios
      .post("http://localhost:3002/newOrder", {
        name: stock.name,
        qty: qtyNum,
        price: priceNum,
        mode: "SELL",
      })
      .then((res) => {
        console.log("Sell Order placed:", res.data);
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Error placing sell order:", err);
        alert("Failed to place sell order.");
      });
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
