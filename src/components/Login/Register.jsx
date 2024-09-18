import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";

const Register = () => {
	// State variables to store user input
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [CurrentPassVisibility, SetPassVisibility] = useState(false);
	const [Confirmpassword, setConfirmPassword] = useState("");
	const [Phone, setPhone] = useState("");

	// Handle user registration
	const handleRegister = (e) => {
		e.preventDefault();

		// Username Validation: Alphanumeric and between 4 to 16 characters
		const usernamePattern = /^[a-zA-Z0-9]{4,16}$/;
		if (!usernamePattern.test(username)) {
			alert("Username must be alphanumeric and 4-16 characters long.");
			return;
		}

		// Email Validation:
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailPattern.test(email)) {
			setMessage("Please enter a valid email address.");
			return;
		}

		// Password Validation: Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character
		const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
		if (!passwordPattern.test(password)) {
			alert(
				"Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
			);
			return;
		}
		// Password Confirmation: Check if passwords match
		if (password !== Confirmpassword) {
			alert("Passwords do not match.");
			return;
		}

		// Phone Validation: Require country code, 10 to 15 digits
		const phonePattern = /^\+?[0-9]{10,15}$/;
		if (!phonePattern.test(Phone)) {
			alert(
				"Please enter a valid phone number (10 to 15 digits) with the country code."
			);
			return;
		}

		// Check if the username already exists in local storage
		const users = JSON.parse(localStorage.getItem("users")) || [];
		const userExists = users.some((user) => user.username === username);

		if (userExists) {
			setMessage("Username already exists.");
		} else {
			// Save new user to local storage
			users.push({ username, email, password });
			localStorage.setItem("users", JSON.stringify(users));
			setMessage("Registration successful!");
			// Reset input fields after successful registration
			setUsername("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			setPhone("");
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		SetPassVisibility(!CurrentPassVisibility);
	};

	return (
		<div className="admin-wrapper" style={{ paddingTop: "60px" }}>
			<div className="container register-page">
				{/* <header>
				<img src="./favicon.svg" alt="Site-Logo" />
			</header> */}
				<div className="form-wrapper">
					<form onSubmit={handleRegister}>
						<h1 className="form-heading">Register</h1>
						{/* Username input with icon */}
						<div className="input-box">
							<input
								type="text"
								placeholder="Username"
								value={username}
								required
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FaUser className="icon" />
						</div>
						{/* Email input with icon */}
						<div className="input-box">
							<input
								type="email"
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								aria-label="E-mail"
							/>
							<FaEnvelope className="icon" />
						</div>
						{/* Password input with toggle visibility */}
						<div className="input-box">
							<input
								type={CurrentPassVisibility ? "text" : "password"}
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								aria-label="Password"
							/>
							<FaLock
								className="icon"
								id="Lock"
								onClick={togglePasswordVisibility}
								title="Toggle Password Visibility"
							/>
						</div>
						{/* Confirm Password input with toggle visibility */}
						<div className="input-box">
							<input
								type={CurrentPassVisibility ? "text" : "password"}
								placeholder="Confirm Password"
								value={Confirmpassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								aria-label="Confirm Password"
							/>
							<FaLock
								className="icon"
								id="Lock"
								onClick={togglePasswordVisibility}
								title="Toggle Password Visibility"
							/>
						</div>
						{/* Phone input with icon */}
						<div className="input-box">
							<input
								type="number"
								placeholder="Phone"
								value={Phone}
								onChange={(e) => setPhone(e.target.value)}
								required
								aria-label="Phone Number"
							/>
							<FaMobile className="icon" />
						</div>
						{/* Submit button */}
						<div className="submit-btn" style={{ marginBottom: "20px" }}>
							<button type="submit">Register</button>
						</div>
						{/* Display success or error message */}
						{message && (
							<p className="message" style={{ marginBottom: "20px" }}>
								{message}
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
