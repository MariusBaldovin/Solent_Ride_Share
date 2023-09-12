import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import the createUserWithEmailAndPassword function
import { auth } from "../firebase"; // Import your Firebase authentication instance
import { useAuth } from "../context/Authcontext";
import "./SignUp.css";

const SignUp = () => {
  /*firebase authentication using email and password*/

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
  //const to direct user to home page after creating account
  const navigate = useNavigate();
  const { signUp, signInWithGoogle, signInWithFacebook } = useAuth(); // Use the useAuth hook for sign in with google and facebook

  const [errors, setErrors] = useState({});

  //name error on the right side of input box in real time if name not having more than 3 characters
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

  //email error on the right side of input box in real time if email not valid
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

  //student number error on the right side of input box in real time if student number is not 8 digits
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

  //password error on the right side of input box in real time if password don't have minimum 8 characters
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

  //password error on the right side of input box in real time if password don't match
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setConfirmPasswordErrors({
        mismatch: "Passwords do not match",
      });
    } else {
      setConfirmPasswordErrors({});
    }
  };

  const handleSubmit = async (e) => {
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
    // Check if there are no validation errors
    if (Object.keys(errors).length === 0) {
      try {
        // Perform Firebase registration with name, email, student number, and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // Set the user's displayName to the provided name
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/SignIn"); //redirect user to Sign in page after succesfully registration
      } catch (error) {
        console.error("Error creating user:", error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/"); //redirect user to the home page after succesfully login with google account
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      // Handle the error, possibly by displaying it to the user
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      navigate("/"); //redirect user to the home page after succesfully login with facebook account
    } catch (error) {
      console.error("Error signing in with Facebook:", error.message);
      // Handle the error, possibly by displaying it to the user
    }
  };

  return (
    <div className="sign_up-body">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>

        {/* Name Input and error handling */}
        <div className="name-error">
          <input
            id="name-input"
            type="text"
            placeholder={!name && !errors.name ? "Name" : ""}
            value={name}
            onChange={handleNameChange}
            className={nameErrors.minLength ? "input-error" : ""}
          />
          {!name && errors.name && (
            <p className="error_empty-field">{errors.name}</p>
          )}
          {nameErrors.minLength && (
            <p className="error">{nameErrors.minLength}</p>
          )}
        </div>

        {/* Email Input and error handling */}
        <div className="name-error">
          <input
            id="email-input"
            type="email"
            placeholder={!email && !errors.email ? "Email" : ""}
            value={email}
            onChange={handleEmailChange}
            className={emailErrors.invalid ? "input-error" : ""}
          />
          {!email && errors.email && (
            <p className="error_empty-field">{errors.email}</p>
          )}
          {emailErrors.invalid && (
            <p className="error">{emailErrors.invalid}</p>
          )}
        </div>

        {/* Student Number Input and error handling */}
        <div className="name-error">
          <input
            id="studentNumber-input"
            type="text"
            placeholder={
              !studentNumber && !errors.studentNumber ? "Student Number" : ""
            }
            value={studentNumber}
            onChange={handleStudentNumberChange}
            className={studentNumberErrors.invalid ? "input-error" : ""}
          />
          {!studentNumber && errors.studentNumber && (
            <p className="error_empty-field">{errors.studentNumber}</p>
          )}
          {studentNumberErrors.invalid && (
            <p className="error">{studentNumberErrors.invalid}</p>
          )}
        </div>

        {/* Password Input and error handling */}
        <div className="name-error">
          <input
            id="password-input"
            type="password"
            placeholder={!password && !errors.password ? "Password" : ""}
            value={password}
            onChange={handlePasswordChange}
            className={passwordErrors.minLength ? "input-error" : ""}
          />
          {!password && errors.password && (
            <p className="error_empty-field">{errors.password}</p>
          )}
          {passwordErrors.minLength && (
            <p className="error">{passwordErrors.minLength}</p>
          )}
        </div>

        {/* Confirm Password Input and error handling */}
        <div className="name-error">
          <input
            id="confirmPassword-input"
            type="password"
            placeholder={
              !confirmPassword && !errors.confirmPassword
                ? "Confirm Password"
                : ""
            }
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordErrors.mismatch ? "input-error" : ""}
          />
          {!confirmPassword && errors.confirmPassword && (
            <p className="error_empty-field">{errors.confirmPassword}</p>
          )}
          {confirmPasswordErrors.mismatch && (
            <p className="error">{confirmPasswordErrors.mismatch}</p>
          )}
        </div>
        <button type="submit">Register</button>
        <p className="message">
          Already have an account? <NavLink to="/SignIn">Sign in</NavLink>
        </p>
        <button className="google" onClick={handleGoogleSignIn}>
          Login with Google
        </button>
        <button className="facebook" onClick={handleFacebookSignIn}>
          Login with Facebook
        </button>
      </form>
    </div>
  );
};

export default SignUp;
