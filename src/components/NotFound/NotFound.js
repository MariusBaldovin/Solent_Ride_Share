import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not__found_container">
      <div className="not__found-page">404 - Page Not Found...</div>
      <div className="not__found-message">
        The page you are looking for does not exist
      </div>
      <div className="back__home">
        <Link>
          <button>Press to go back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
