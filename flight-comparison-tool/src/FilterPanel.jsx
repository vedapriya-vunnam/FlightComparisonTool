import React from "react";

function FilterPanel() {
  return (
    <div className="module-page">

      <h1>🔍 Smart Filter Panel</h1>

      <div className="filter-container">

        <div className="filter-card">

          <label>Price Range</label>

          <select>
            <option>₹3000 - ₹5000</option>
            <option>₹5000 - ₹8000</option>
            <option>₹8000+</option>
          </select>

          <label>Number of Stops</label>

          <select>
            <option>Non-Stop</option>
            <option>1 Stop</option>
            <option>2+ Stops</option>
          </select>

          <label>Departure Time</label>

          <select>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
          </select>

          <label>Preferred Airline</label>

          <select>
            <option>IndiGo</option>
            <option>Air India</option>
            <option>Vistara</option>
          </select>

          <button className="module-btn">
            Apply Filters
          </button>

        </div>

      </div>

    </div>
  );
}

export default FilterPanel;