import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./OfferRide.css";
import dashImg from "../../assets/dash.png";

const OfferRide = () => {
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");

  const handleOfferRide = async () => {
    try {
      // Create a new document in the "rides_offer" collection
      const docRef = await addDoc(collection(db, "rides_offered"), {
        location: from,
        datetime: new Date(`${date} ${time}`), // Combine date and time into a datetime
        seats_available: parseInt(seats), // Parse seats as an integer
      });

      console.log("Document written with ID: ", docRef.id);

      // Clear the input fields after adding the data
      setFrom("");
      setDate("");
      setTime("");
      setSeats("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="offer-ride-container">
      <div className="solent__dash-img">
        <img src={dashImg} className="dash-img" alt="dash" />
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
          type="number"
          value={seats === "" ? "" : parseInt(seats)}
          onChange={(e) => {
            const newValue = e.target.value;
            if (newValue === "" || (newValue >= 1 && newValue <= 4)) {
              setSeats(newValue);
            }
          }}
          //onChange={(e) => setSeats(e.target.value)}
          className="input-field"
          placeholder="Number of seats"
        />
      </div>
      <button onClick={handleOfferRide} className="offer-a-ride-button">
        Offer this Ride
      </button>
    </div>
  );
};

export default OfferRide;
