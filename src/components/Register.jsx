import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import "./Login-Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [CurrentPassVisibility, SetPassVisibility] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Username Validation
    const usernamePattern = /^[A-Z].*$/;
    if (!usernamePattern.test(username)) {
      alert("Username must start with a capital letter .");
      return;
    }

    //Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|int|co|info|io|us)$/i;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    //Password Validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Confirm Password Validation
    if (password !== Confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    // Phone Validation
    const phonePattern = /^\+?[0-9]{10,15}$/;
    if (!phonePattern.test(Phone)) {
      alert("Please enter a valid phone number (10 to 15 digits).");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setMessage("Username already exists.");
    } else {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
    }
  };

  //password visibility function
  const togglePasswordVisibility = () => {
    SetPassVisibility(!CurrentPassVisibility);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleRegister}>
          <h1 className="form-heading">Register</h1>
          {message && <p className="message">{message}</p>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type={CurrentPassVisibility ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock
              className="icon"
              id="Lock"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input-box">
            <input
              type={CurrentPassVisibility ? "text" : "password"}
              placeholder="Confirm Password"
              value={Confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock
              className="icon"
              id="Lock"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <FaMobile className="icon" />
          </div>
          <div className="submit-btn">
            <button type="submit">Register</button>
          </div>
          <div className="register-login-links">
            <p>
              Already have an account? <a href="/Login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
