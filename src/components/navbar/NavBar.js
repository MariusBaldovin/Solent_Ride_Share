import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/Authcontext"; // Import the useAuth hook

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { currentUser, signOut } = useAuth(); // Get the user's authentication status and signOut function
  const hideMenu = () => {
    setToggleMenu(false);
  }; // const to hide toggle menu on mobile vesrion after click

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
        {currentUser ? ( // Check if the user is logged in
          <>
            <p>Welcome {currentUser.displayName}</p>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <>
            <NavLink to="/SignIn">
              <p>Sign in</p>
            </NavLink>
            <NavLink to="/SignUp">
              <button type="button">Sign up</button>
            </NavLink>
          </>
        )}
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
              {/* Menu links */}
              <p onClick={hideMenu}>
                <NavLink to="/">Home</NavLink>
              </p>

              <p onClick={hideMenu}>
                <NavLink to="/OfferRide">Offer Ride</NavLink>
              </p>
              <p onClick={hideMenu}>
                <NavLink to="/Rewards">Rewards</NavLink>
              </p>
              <p onClick={hideMenu}>
                <NavLink to="/FAQ">FAQ </NavLink>
              </p>
            </div>
            <div className="solent__navbar-menu_container-links-sign">
              {currentUser ? ( // Check if the user is logged in for mobile version
                <>
                  <p>Welcome {currentUser.displayName}</p>
                  <button onClick={signOut}>Sign Out</button>
                </>
              ) : (
                <>
                  <NavLink to="/SignIn">
                    <p onClick={hideMenu}>Sign in</p>
                  </NavLink>
                  <NavLink to="/SignUp">
                    <button type="button" onClick={hideMenu}>
                      Sign up
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
