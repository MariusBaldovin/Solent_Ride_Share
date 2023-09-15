import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./RidesOffered.css";

const RidesOffered = () => {
  const [rides, setRides] = useState([]);
  const locationParam = new URLSearchParams(useLocation().search).get(
    "location"
  );
  const dateParam = new URLSearchParams(useLocation().search).get("date");
  const timeParam = new URLSearchParams(useLocation().search).get("time");

  useEffect(() => {
    const collectionReference = collection(db, "rides_offered");

    getDocs(collectionReference)
      .then((querySnapshot) => {
        const ridesData = [];
        querySnapshot.forEach((doc) => {
          const rideData = doc.data();
          const datetime = rideData.datetime.toDate();

          // Filter rides based on user's input location and timestamp
          if (
            (!locationParam ||
              rideData.location
                .toLowerCase()
                .includes(locationParam.toLowerCase())) &&
            (!dateParam || new Date(dateParam) <= datetime) &&
            (!timeParam || new Date(timeParam) <= datetime)
          ) {
            ridesData.push({ ...rideData, datetime });
          }
        });
        setRides(ridesData);
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, [locationParam, dateParam, timeParam]);

  return (
    <div className="rides-offered-container">
      <h1>Riders offered</h1>
      <div className="table-container">
        {rides.length === 0 ? (
          <h1>No Rides available for your chosen Location or Date</h1>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Seats Available</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride) => (
                <tr key={ride.id}>
                  <td>{ride.location}</td>
                  <td>{ride.datetime.toLocaleDateString()}</td>
                  <td>{ride.datetime.toLocaleTimeString()}</td>
                  <td>{ride.seats_available}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RidesOffered;
