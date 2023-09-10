// Support.js
import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-container">
      <h2>Support</h2>
      <p>
        If you need assistance or have any questions regarding the Solent Ride
        Share App, please don't hesitate to contact our support team.
      </p>
      <p>
        Email:{" "}
        <a href="mailto:support@solentrideshare.com">
          support@solentrideshare.com
        </a>
      </p>
      <p>
        Live Chat:{" "}
        <a
          href="https://your-live-chat-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with us
        </a>
      </p>
      <p>
        Contact Number: <a href="tel:+449999999999">+44 999 9999 999</a>
      </p>
    </div>
  );
};

export default Support;
