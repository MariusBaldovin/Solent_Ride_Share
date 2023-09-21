import React, { useState } from "react";
import "./Email.css";

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (e) => {
    e.target.placeholder = ""; // Clear the placeholder when focused
  };

  const handleBlur = (e) => {
    if (formData[e.target.name] === "") {
      e.target.placeholder =
        e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1); // Restore the placeholder if the field is empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="email-container">
      <h2>Email Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Email;
