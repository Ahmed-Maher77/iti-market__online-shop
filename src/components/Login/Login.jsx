import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./style.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [CurrentPassVisibility, SetPassVisibility] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();

		const users = JSON.parse(localStorage.getItem("users")) || [];
		const user = users.find(
			(user) => user.username === username && user.password === password
		);

		if (user) {
			setMessage("Login successful!");
			setUsername("");
			setPassword("");
		} else {
			setMessage("Invalid credentials.");
		}
	};

	//password visibility function
	const togglePasswordVisibility = () => {
		SetPassVisibility(!CurrentPassVisibility);
	};

	return (
		<div className="admin-wrapper">
			<div className="container login-page">
				{/* <header>
				<img src="./favicon.svg" alt="Site-Logo" />
			</header> */}
				<div className="form-wrapper" style={{ marginTop: "60px" }}>
					<form onSubmit={handleLogin}>
						<h1 className="form-heading">Login</h1>
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
						<div className="remember-forgot">
							<label>
								<input type="checkbox" /> Remember me
							</label>
							<a href="#">Forgot Password?</a>
						</div>
						<div className="submit-btn">
							<button type="submit">Login</button>
						</div>
						<div className="register-link" style={{ marginBottom: "20px" }}>
							<p>
								Don't have an account? <a href="/register">Register</a>
							</p>
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

export default Login;
