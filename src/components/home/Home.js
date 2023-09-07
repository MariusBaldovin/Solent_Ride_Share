import React from "react";
import "./Home.css";
import background from "../../assets/background.png";

const Home = () => {
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
          <div className="find-a-ride-button">
            <div className="text-wrapper">Find a Ride</div>
          </div>
          <div className="div">Pick up location?</div>
          <div className="text-wrapper-2">Date</div>
          <div className="text-wrapper-3">Time</div>
        </div>
      </div>
    </>
  );
};
export default Home;
