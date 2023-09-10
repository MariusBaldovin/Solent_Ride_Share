import React from "react";
import "./AboutUs.css";
import teamPhoto from "../../assets/team-photo.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <img
          src={teamPhoto} // Use the imported image
          alt="Our Team"
          className="team-photo"
        />
      </div>
      <div className="about-us-content">
        <p>
          We are the team behind the Solent Ride Share App, dedicated to making
          your daily commute easier, more affordable, and environmentally
          friendly. Our mission is to connect Solent University students and
          provide them with a convenient and cost-effective ride-sharing
          solution.
        </p>
        <p>
          We believe in sustainability, safety, and community. Join us in our
          journey to create a better commuting experience for you and your
          fellow students.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
