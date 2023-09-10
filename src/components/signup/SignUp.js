import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!name) errors.name = "Name is required";

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }

    if (!password) errors.password = "Password is required";

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  return (
    <div className="sign_up-body">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {errors.name && <p className="error">{errors.name}</p>}
        <label>Name:</label>
        <input
          type="text"
          className={errors.name ? "input-error" : ""}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.email && <p className="error">{errors.email}</p>}
        <label>Email:</label>
        <input
          type="email"
          className={errors.email ? "input-error" : ""}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Student Number:</label>
        <input
          type="number" // Set the type to "number"
          className={errors.studentNumber ? "input-error" : ""}
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          className={errors.password ? "input-error" : ""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <label>Confirm Password:</label>
        <input
          type="password"
          className={errors.confirmPassword ? "input-error" : ""}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>

        <p className="message">
          Already have an account? <NavLink to="/SignIn">Sign in</NavLink>
        </p>

        <button className="google">Login with Google</button>

        <button className="facebook">Login with Facebook</button>
      </form>
    </div>
  );
}

export default SignUp;
