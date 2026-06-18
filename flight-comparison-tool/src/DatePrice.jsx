import React from "react";

function DatePrice() {
  const fares = [
    { date: "15 Jun", price: "₹4500" },
    { date: "16 Jun", price: "₹4200" },
    { date: "17 Jun", price: "₹5100" },
    { date: "18 Jun", price: "₹3900" }
  ];

  return (
    <div className="module-page">

      <h1>📅 Date Price Calendar</h1>

      <div className="module-grid">

        {fares.map((item,index)=>(
          <div className="module-card" key={index}>

            <h2>{item.date}</h2>

            <h3>{item.price}</h3>

            <button className="module-btn">
              View Fare
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DatePrice;