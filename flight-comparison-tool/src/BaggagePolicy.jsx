import React from "react";

function BaggagePolicy() {
  return (
    <div className="module-page">

      <h1>🧳 Baggage Policy Grid</h1>

      <div className="module-grid">

        <div className="module-card">
          <h2>IndiGo</h2>

          <p><strong>Cabin:</strong> 7 kg</p>

          <p><strong>Check-In:</strong> 15 kg</p>

          <p><strong>Extra:</strong> ₹600 / 5kg</p>

          <button className="module-btn">
            View Policy
          </button>
        </div>

        <div className="module-card">
          <h2>Air India</h2>

          <p><strong>Cabin:</strong> 8 kg</p>

          <p><strong>Check-In:</strong> 20 kg</p>

          <p><strong>Extra:</strong> ₹500 / 5kg</p>

          <button className="module-btn">
            View Policy
          </button>
        </div>

        <div className="module-card">
          <h2>Vistara</h2>

          <p><strong>Cabin:</strong> 7 kg</p>

          <p><strong>Check-In:</strong> 20 kg</p>

          <p><strong>Extra:</strong> ₹550 / 5kg</p>

          <button className="module-btn">
            View Policy
          </button>
        </div>

      </div>

    </div>
  );
}

export default BaggagePolicy;