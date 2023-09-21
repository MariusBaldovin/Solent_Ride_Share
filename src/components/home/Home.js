import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

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
            <span className="welcome__span">
              Welcome to Solent <br /> RideShare!
            </span>
          </p>
        </div>
        <div class="search-container">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Home;
