import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [CurrentPassVisibility, SetPassVisibility] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();

		// Username Validation
		const usernamePattern = /^[A-Z][a-zA-Z0-9._-]{2,29}$/;
		if (!usernamePattern.test(username)) {
			alert(
				"Username must start with a capital letter and be 3 to 30 characters long, including only letters, numbers, dots, underscores, and hyphens."
			);
			return;
		}

		//Email Validation
		const emailPattern =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|int|co|info|io|us)$/i;
		if (!emailPattern.test(email)) {
			setMessage("Please enter a valid email address.");
			return;
		}

		//Password Validation
		if (password.length < 6) {
			setMessage("Password must be at least 6 characters long.");
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
		}
	};

	//password visibility function
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
						<div className="input-box">
							<input
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FaUser className="icon" />
						</div>
						<div className="input-box">
							<input
								type="email"
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
						<div className="submit-btn" style={{ marginBottom: "20px" }}>
							<button type="submit">Register</button>
						</div>
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
