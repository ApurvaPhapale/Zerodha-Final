import React, { useEffect, useState } from "react";
import axios from "axios";
import servers from "../../environment"; // adjust if needed

const Dashboard = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(`${servers.prod}/allHoldings`);
        setHoldings(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📈 Your Holdings</h2>
      {holdings.length === 0 ? (
        <p>No holdings available.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
