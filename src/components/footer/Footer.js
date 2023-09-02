import React from "react";
import "./Footer.css";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="solent__footer">
      <div className="solent__ride">
        <p className="solent-ride-share">
          <span className="text-wrapper">Solent</span>
          <span className="span">Ride</span>
          <span className="text-wrapper">Share</span>
        </p>
      </div>
      <div className="solent__social-media">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="solent__quick-links">
        <h1>Quick Links</h1>
        <p>
          <NavLink to="/AboutUs">About us</NavLink>
        </p>
        <p>
          <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
        </p>
        <p>
          <NavLink to="/Support">Support</NavLink>
        </p>
      </div>
      <div className="solent__contact">
        <p>Contact Us</p>
        <p>
          <NavLink to="/email">Ride_share@solent.ac.uk</NavLink>
        </p>
        <p>+44 999 9999 999</p>
      </div>
    </div>
  );
};
export default Footer;
