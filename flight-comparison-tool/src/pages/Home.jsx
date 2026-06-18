import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [showFlights, setShowFlights] = useState(false);

  const flights = [
    {
      airline: "IndiGo",
      from: "DEL",
      to: "BOM",
      duration: "2h 10m",
      price: "₹4,500"
    },
    {
      airline: "Air India",
      from: "DEL",
      to: "BOM",
      duration: "2h 25m",
      price: "₹5,200"
    },
    {
      airline: "Vistara",
      from: "DEL",
      to: "BOM",
      duration: "2h 15m",
      price: "₹4,900"
    }
  ];

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

          <button onClick={() => setShowFlights(true)}>
            Search Flights
          </button>

        </div>

      </div>

      {/* AVAILABLE FLIGHTS */}

      {showFlights && (

        <div className="flight-results">

          <h2>Available Flights</h2>

          <div className="module-grid">

            {flights.map((flight, index) => (

              <div className="module-card" key={index}>

                <h2>{flight.airline}</h2>

                <p>
                  <strong>Route:</strong> {flight.from} → {flight.to}
                </p>

                <p>
                  <strong>Duration:</strong> {flight.duration}
                </p>

                <h3>{flight.price}</h3>

                <button className="module-btn">
                  Book Now
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

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

        <Link to="/date-price" className="feature-card">
          <h3>📅 Date Price Calendar</h3>
          <p>Find cheapest travel dates instantly.</p>
        </Link>

        <Link to="/airline-compare" className="feature-card">
          <h3>✈️ Airline Compare</h3>
          <p>Compare airlines based on price and duration.</p>
        </Link>

        <Link to="/baggage-policy" className="feature-card">
          <h3>🧳 Baggage Policy Grid</h3>
          <p>Check baggage allowances and extra costs.</p>
        </Link>

        <Link to="/otp-stats" className="feature-card">
          <h3>⏱️ On-Time Performance</h3>
          <p>View delays, cancellations and punctuality rates.</p>
        </Link>

        <Link to="/filter-panel" className="feature-card">
          <h3>🔍 Smart Filter Panel</h3>
          <p>Filter by stops, timing, price and airlines.</p>
        </Link>

        <Link to="/layover-info" className="feature-card">
          <h3>🛫 Layover Info</h3>
          <p>Get detailed layover duration and airport details.</p>
        </Link>

      </div>

    </div>
  );
}

export default Home;
