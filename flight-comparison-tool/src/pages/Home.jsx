import React from "react";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}

      <div className="hero-section">

        <h1>SkyCompare</h1>

        <p>
          Compare flights smarter with price tracking, airline comparison,
          baggage policies, layover insights and on-time performance.
        </p>

        {/* SEARCH BAR */}

        <div className="search-box">

          <input type="text" placeholder="✈️ From (e.g. DEL)" />

          <input type="text" placeholder="🛬 To (e.g. BOM)" />

          <input type="date" />

          <button>Search Flights</button>

        </div>
      </div>

      {/* STATS SECTION */}

      <div className="stats-section">

        <div className="stat-card">
          <h2>500+</h2>
          <p>AIRLINES TRACKED</p>
        </div>

        <div className="stat-card">
          <h2>2M+</h2>
          <p>FLIGHTS COMPARED</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>ACCURACY RATE</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>USER RATING</p>
        </div>

      </div>

      {/* FEATURES */}

      <div className="features-section">

        <div className="feature-card">
          <h3>Date Price Calendar</h3>
          <p>Find cheapest travel dates instantly.</p>
        </div>

        <div className="feature-card">
          <h3>Airline Compare</h3>
          <p>Compare airlines based on price and duration.</p>
        </div>

        <div className="feature-card">
          <h3>Baggage Policy Grid</h3>
          <p>Check baggage allowances and extra costs.</p>
        </div>

        <div className="feature-card">
          <h3>On-Time Performance</h3>
          <p>View delays, cancellations and punctuality rates.</p>
        </div>

        <div className="feature-card">
          <h3>Smart Filter Panel</h3>
          <p>Filter by stops, timing, price and airlines.</p>
        </div>

        <div className="feature-card">
          <h3>Layover Info</h3>
          <p>Get detailed layover duration and airport details.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;