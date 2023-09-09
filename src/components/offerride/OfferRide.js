import React, { useState } from "react";
import "./OfferRide.css";
import dashImg from "../../assets/dash.png";

const OfferRide = () => {
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");

  return (
    <div className="offer-ride-container">
      <div className="solent__dash-img">
        <img src={dashImg} className="dash-img" />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="input-field"
          placeholder="From?"
        />
      </div>
      <div className="input-container">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
          placeholder="Date"
        />
      </div>
      <div className="input-container">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input-field"
          placeholder="Time"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="input-field"
          placeholder="Number of seats"
        />
      </div>
      <a href="#" className="offer-a-ride-button">
        <div className="solent__offer-a-ride">Offer this Ride</div>
      </a>
    </div>
  );
};

export default OfferRide;
