import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateInputOpen, setDateInputOpen] = useState(false);
  const [timeInputOpen, setTimeInputOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState(false);

  const toggleDateInput = () => {
    setDateInputOpen(!dateInputOpen);
  };

  const toggleTimeInput = () => {
    setTimeInputOpen(!timeInputOpen);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleLocationInputClick = () => {
    if (!editingLocation) {
      setEditingLocation(true);
    }
  };

  return (
    <>
      <div className="solent__background">
        <div className="solent__label">
          <p className="solent__slogan">
            <span className="solent__text-wrapper">
              Your Commute, <br />
              Your Way <br />
            </span>
            <span className="welcome__span">Welcome to Solent RideShare!</span>
          </p>
        </div>
        <div className="searching">
          <a href="#" className="find-a-ride-button">
            <div className="solent__find-a-ride">Find a Ride</div>
          </a>
          <div className="solent__pickup-location">
            {editingLocation ? (
              <input
                placeholder={location ? "" : "Pick up location?"}
                value={location}
                onChange={handleLocationChange}
                onClick={handleLocationInputClick}
                className={`pickup__input-box ${
                  location ? "pickup__location" : ""
                }`}
              />
            ) : (
              <span
                onClick={handleLocationInputClick}
                className={location ? "pickup__input-box" : ""}
              >
                Pick up location?
              </span>
            )}
          </div>
          <div className="solent__pickup-date">
            {dateInputOpen ? (
              <>
                <input type="date" value={date} onChange={handleDateChange} />
                <svg
                  width="14"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleDateInput}
                >
                  <path
                    d="M1 1L7 6.75085L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Date</span>
                <svg
                  width="14"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleDateInput}
                >
                  <path
                    d="M1 1L7 6.75085L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </div>

          <div className="solent__pickup-time">
            {timeInputOpen ? (
              <>
                <input type="time" value={time} onChange={handleTimeChange} />
                <svg
                  width="14"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleTimeInput}
                >
                  <path
                    d="M1 1L7 6.75085L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Time</span>
                <svg
                  width="14"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleTimeInput}
                >
                  <path
                    d="M1 1L7 6.75085L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
