import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="solent__navbar">
      <div className="solent__navbar-links">
        <div className="solent__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="solent__navbar-links_container">
          <p>
            <NavLink to="/">Home</NavLink>
          </p>
          <p>
            <NavLink to="/OfferRide">Offer Ride</NavLink>
          </p>
          <p>
            <NavLink to="/Rewards">Rewards</NavLink>
          </p>
          <p>
            <NavLink to="/FAQ">FAQ</NavLink>
          </p>
        </div>
      </div>
      <div className="solent__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="solent__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="solent__navbar-menu_container scale-up-center">
            <div className="solent__navbar-menu_container-links">
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <p>
                <NavLink to="/OfferRide">Offer Ride</NavLink>
              </p>
              <p>
                <NavLink to="/Rewards">Rewards</NavLink>
              </p>
              <p>
                <NavLink to="/FAQ">FAQ</NavLink>
              </p>
            </div>
            <div className="solent__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
