// PrivacyPolicy.js
import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy applies to the use of the Solent Ride Share App
        (referred to as "the App") provided by Solent University.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        The App may collect personal information such as your name, email
        address, and location for the purpose of providing ride-sharing services
        and ensuring the safety and security of all users.
      </p>

      <h3>2. How We Use Your Information</h3>
      <p>
        We use your information to facilitate ride-sharing, improve our
        services, and communicate important updates or changes. Your data may
        also be used for analytics and research to enhance the user experience.
      </p>

      <h3>3. Data Security</h3>
      <p>
        We take data security seriously and implement measures to protect your
        personal information. However, no online platform can guarantee 100%
        security, so use the App with caution.
      </p>

      <h3>4. Third-Party Services</h3>
      <p>
        We may use third-party services for various purposes, such as payment
        processing. These services have their own privacy policies, and we
        recommend reviewing them.
      </p>

      <h3>5. Your Rights</h3>
      <p>
        Under GDPR, you have the right to access, correct, or delete your
        personal information. You can exercise these rights by contacting us.
      </p>

      <h3>6. Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy to reflect changes in our practices or
        legal requirements. Please check this page periodically for updates.
      </p>

      <h3>7. Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or your
        personal data, please contact us at{" "}
        <a href="mailto:solent_ride_share@solent.ac.uk">
          solent_ride_share@solent.ac.uk
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
