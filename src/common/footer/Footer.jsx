import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					{/* Branding section with the app's description */}
					<div className="box">
						<h1>ITI Market</h1>
						<p>
							Online Shopping Web Application, designed to provide a seamless
							shopping experience.
						</p>

						{/* App download links with icons */}
						<div className="icon d_flex">
							<div className="img d_flex">
								<i className="fa-brands fa-google-play" aria-hidden="true"></i>
								<span>Google Play</span>
							</div>
							<div className="img d_flex">
								<i className="fa-brands fa-app-store-ios" aria-hidden="true"></i>
								<span>App Store</span>
							</div>
						</div>
					</div>

					{/* About Us section */}
					<div className="box">
						<h2>About Us</h2>
						<ul>
							<li>Careers</li>
							<li>Our Stores</li>
							<li>Our Cares</li>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</div>

					{/* Customer Care section */}
					<div className="box">
						<h2>Customer Care</h2>
						<ul>
							<li>Help Center </li>
							<li>How to Buy </li>
							<li>Track Your Order </li>
							<li>Corporate & Bulk Purchasing </li>
							<li>Returns & Refunds </li>
						</ul>
					</div>

					{/* Contact Us section */}
					<div className="box">
						<h2>Contact Us</h2>
						<ul>
							<li>
								70 Washington Square South, New York, NY 10012, United States{" "}
							</li>
							<li>Email: uilib.help@gmail.com</li>
							<li>Phone: +1 1123 456 780</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
