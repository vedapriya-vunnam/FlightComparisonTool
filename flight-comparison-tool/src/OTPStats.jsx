import React from "react";

function OTPStats() {

  return (

    <div className="module-page">

      <h1>⏱ On-Time Performance</h1>

      <div className="module-grid">

        <div className="module-card">
          <h2>IndiGo</h2>
          <h3>95%</h3>
          <button className="module-btn">
            View Report
          </button>
        </div>

        <div className="module-card">
          <h2>Air India</h2>
          <h3>89%</h3>
          <button className="module-btn">
            View Report
          </button>
        </div>

      </div>

    </div>
  );
}

export default OTPStats;