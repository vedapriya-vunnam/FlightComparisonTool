import React from "react";

function AirlineCompare() {
  return (

    <div className="module-page">

      <h1>✈ Airline Compare</h1>

      <div className="module-grid">

        <div className="module-card">
          <h2>IndiGo</h2>
          <p>Fare: ₹4500</p>
          <p>Duration: 2h 15m</p>
          <button className="module-btn">Compare</button>
        </div>

        <div className="module-card">
          <h2>Air India</h2>
          <p>Fare: ₹4800</p>
          <p>Duration: 2h 30m</p>
          <button className="module-btn">Compare</button>
        </div>

      </div>

    </div>
  );
}

export default AirlineCompare;