import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [MobileMenu, setMobileMenu] = useState(false); // State to manage mobile menu toggle
	return (
		<>
			{/* Main header with navigation */}
			<header className="header">
				<div className="container d_flex">
					{/* Categories section */}
					<div className="catgrories d_flex">
						<span className="fa-solid fa-border-all"></span>
						<h4>
							Categories <i className="fa fa-chevron-down"></i>
						</h4>
					</div>

					{/* Navigation links */}
					<div className="navlink">
						<ul
							className={
								MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
							}
							onClick={() => setMobileMenu(false)}
						>
							<li>
								<Link to="/">home</Link>
							</li>
							<li>
								<Link to="/pages" className="disable-link">pages</Link>
							</li>
							<li>
								<Link to="/user"  className="disable-link">user account</Link>
							</li>
							<li>
								<Link to="/vendor" className="disable-link">vendor account</Link>
							</li>
							<li>
								<Link to="/track" className="disable-link">track my order</Link>
							</li>
							<li>
								<Link to="/contact" className="disable-link">contact</Link>
							</li>
						</ul>

						{/* Button to toggle mobile menu */}
						<button
							className="toggle"
							onClick={() => setMobileMenu(!MobileMenu)}
						>
							{MobileMenu ? (
								<i className="fas fa-times close home-btn"></i>
							) : (
								<i className="fas fa-bars open"></i>
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
