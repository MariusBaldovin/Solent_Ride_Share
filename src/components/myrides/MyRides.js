// MyRides.js

import React from "react";
import { useParams } from "react-router-dom";
import "./MyRides.css";

export default function MyRides() {
  const { rideId } = useParams();

  return (
    <div className="booking">
      <h2>Ride Booked Successfully!</h2>
      <p>Ride {rideId} booked</p>
    </div>
  );
}
