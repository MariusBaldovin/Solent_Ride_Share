import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
  };

  return (
    <div className="sign-in-body">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="message">
          Don't have an account? <NavLink to="/SignUp">Sign up</NavLink>
        </p>

        <button className="google">Login with Google</button>

        <button className="facebook">Login with Facebook</button>
      </form>
    </div>
  );
}

export default SignIn;
