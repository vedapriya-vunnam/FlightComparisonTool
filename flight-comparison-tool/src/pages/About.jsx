import React from "react";

function About() {
  return (
    <div className="about-page">

      <div className="about-content">

        <h1>About SkyCompare</h1>

        <div className="blue-line"></div>

        <p>
          SkyCompare is an advanced flight comparison platform designed
          to help travelers find the best flight options quickly and efficiently.
          Our system compares airline fares, travel duration, baggage policies,
          layover information, and on-time performance statistics to provide
          users with smart travel decisions.
        </p>

        <p>
          The platform includes powerful modules such as Date Price Calendar,
          Airline Compare, Smart Filter Panel, Baggage Policy Grid,
          and Layover Information. These features help users compare flights
          based on convenience, reliability, and affordability.
        </p>

        <p>
          Our goal is to simplify flight booking and improve travel planning
          with a smooth and user-friendly experience.
        </p>

      </div>

      <div className="bottom-bar">

        <p>✉ support@skycompare.com</p>

        <p>📞 +91 98765 43210</p>

        <p>© 2025 SkyCompare. All rights reserved.</p>

      </div>

    </div>
  );
}

export default About;