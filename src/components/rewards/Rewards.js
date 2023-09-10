import React from "react";
import "./Rewards.css";

const Rewards = () => {
  return (
    <div className="rewards-container">
      <h2>Rewards</h2>
      <div className="reward-item">
        <div className="reward-icon ride-points">
          <i className="fas fa-star"></i>
        </div>
        <div className="reward-details">
          <h3>Ride Points</h3>
          <p>
            Earn points for each ride you share or take. Collect points to
            unlock a free ride. The first 100 points are from us.
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "20%" }}>
              20% Complete
            </div>
          </div>
          <div className="reward-info">
            <span>Current Points: 100</span>
            <span>Next Reward: 500 Points</span>
          </div>
        </div>
      </div>
      <div className="reward-item">
        <div className="reward-icon referral-program">
          <i className="fas fa-users"></i>
        </div>
        <div className="reward-details">
          <h3>Referral Program</h3>
          <p>
            Invite friends to join the Solent Ride Share App and earn bonuses
            for every successful referral. Help your friends save and earn
            together!
          </p>
          <div className="reward-info">
            <span>Earned Bonuses: £0</span>
            <span>Referral Code: A1B2C3</span>
          </div>
        </div>
      </div>
      <div className="reward-item">
        <div className="reward-icon exclusive-promotions">
          <i className="fas fa-percent"></i>
        </div>
        <div className="reward-details">
          <h3>Exclusive Promotions</h3>
          <p>
            Get access to exclusive discounts and promotions from our partner
            businesses. Enjoy special deals while using the Solent Ride Share
            App.
          </p>
          <div className="reward-info">
            <span>
              Current Promotion: Get 50% off your first 3 rides. 1Use the code
              solent50off
            </span>
            <span>Next Promotion: 10% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
