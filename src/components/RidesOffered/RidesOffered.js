import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const RidesOffered = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const collectionReference = collection(db, "rides_offered");

    getDocs(collectionReference)
      .then((querySnapshot) => {
        const ridesData = [];
        querySnapshot.forEach((doc) => {
          const rideData = doc.data();
          // Assuming 'datetime' is the timestamp field
          const datetime = rideData.datetime.toDate(); // Convert to JavaScript Date
          ridesData.push({ ...rideData, datetime });
        });
        setRides(ridesData);
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, []);

  return (
    <div className="rides-offered-container">
      <h1>Riders offered</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Seats</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.location}</td>
                <td>{ride.seats_available}</td>
                <td>{ride.datetime.toLocaleDateString()}</td>
                <td>{ride.datetime.toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RidesOffered;
