import React from "react";

function LayoverInfo() {
  return (
    <div className="module-page">

      <h1>🛫 Layover Information</h1>

      <div className="module-grid">

        <div className="module-card">

          <h2>AI 245</h2>

          <p><strong>Layover City:</strong> Mumbai</p>

          <p className="layover-time">
            Duration: 2 Hours
          </p>

          <p>
            Airport: Chhatrapati Shivaji Maharaj International Airport
          </p>

          <button className="module-btn">
            View Details
          </button>

        </div>

        <div className="module-card">

          <h2>UK 812</h2>

          <p><strong>Layover City:</strong> Delhi</p>

          <p className="layover-time">
            Duration: 1.5 Hours
          </p>

          <p>
            Airport: Indira Gandhi International Airport
          </p>

          <button className="module-btn">
            View Details
          </button>

        </div>

        <div className="module-card">

          <h2>AI 512</h2>

          <p><strong>Layover City:</strong> Bengaluru</p>

          <p className="layover-time">
            Duration: 3 Hours
          </p>

          <p>
            Airport: Kempegowda International Airport
          </p>

          <button className="module-btn">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default LayoverInfo;