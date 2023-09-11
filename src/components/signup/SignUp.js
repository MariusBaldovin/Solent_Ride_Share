import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [nameErrors, setNameErrors] = useState({});
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState({});
  const [studentNumber, setStudentNumber] = useState("");
  const [studentNumberErrors, setStudentNumberErrors] = useState({});
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState({});

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 3) {
      setNameErrors({
        minLength: "Name must be at least 3 characters",
      });
    } else {
      setNameErrors({});
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailErrors({
        invalid: "Invalid email address",
      });
    } else {
      setEmailErrors({});
    }
  };

  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);

    if (!/^\d{8}$/.test(e.target.value)) {
      setStudentNumberErrors({
        invalid: "Student Number must be exactly 8 digits",
      });
    } else {
      setStudentNumberErrors({});
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordErrors({
        minLength: "Password must be minimum 8 characters",
      });
    } else {
      setPasswordErrors({});
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value != password) {
      setConfirmPasswordErrors({
        mismatch: "Passwords do not match",
      });
    } else {
      setConfirmPasswordErrors({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    //name validation
    if (!name) {
      errors.name = "Name is required";
    } else if (name.length < 3) {
      errors.name = "";
    }

    // Email validation logic
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "";
    }

    // Student Number validation logic
    if (!studentNumber) {
      errors.studentNumber = "Student Number is required";
    } else if (!/^\d{8}$/.test(studentNumber)) {
      errors.studentNumber = "";
    }

    // Password validation logic
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "";
    }

    // Confirm Password validation logic
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "";
    }

    setErrors(errors);
  };

  return (
    <div className="sign_up-body">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>

        {errors.name && <p className="error">{errors.name}</p>}
        <div className="name-error">
          <input
            id="name-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className={nameErrors.minLength ? "input-error" : ""}
          />
          {nameErrors.minLength && (
            <p className="error">{nameErrors.minLength}</p>
          )}
        </div>

        {errors.email && <p className="error">{errors.email}</p>}
        <div className="name-error">
          <input
            id="email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={emailErrors.invalid ? "input-error" : ""}
          />
          {emailErrors.invalid && (
            <p className="error">{emailErrors.invalid}</p>
          )}
        </div>

        <div className="name-error">
          <input
            id="studentNumber-input"
            type="text"
            placeholder="Student Number"
            value={studentNumber}
            onChange={handleStudentNumberChange}
            className={studentNumberErrors.invalid ? "input-error" : ""}
          />
          {studentNumberErrors.invalid && (
            <p className="error">{studentNumberErrors.invalid}</p>
          )}
        </div>

        <div className="name-error">
          <input
            id="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordErrors.minLength ? "input-error" : ""}
          />
          {passwordErrors.minLength && (
            <p className="error">{passwordErrors.minLength}</p>
          )}
        </div>

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <div className="name-error">
          <input
            id="confirmPassword-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordErrors.mismatch ? "input-error" : ""}
          />
          {confirmPasswordErrors.mismatch && (
            <p className="error">{confirmPasswordErrors.mismatch}</p>
          )}
        </div>

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
