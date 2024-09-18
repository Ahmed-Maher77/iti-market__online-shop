import React, { useEffect, useRef, useState } from "react";
import logo from "../../components/assets/images/logo1.svg";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
	const [showLogin, setShowLogin] = useState(false)
	const loginRef = useRef(null); // Reference to the login dropdown

	// to toggle 'active' class based on scroll position
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});

	// Handle clicks outside the login dropdown
	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (loginRef.current && !loginRef.current.contains(event.target)) {
			setShowLogin(false); // Close the dropdown if clicked outside
		  }
		};
		// Add event listener
		document.addEventListener("mousedown", handleClickOutside);
		// Remove event listener on cleanup
		return () => {
		  document.removeEventListener("mousedown", handleClickOutside);
		};
	  }, [loginRef]);

	return (
		<section className="search">
			<div className="container c_flex">
				{/* Logo Section */}
				<div className="logo width">
					<img src={logo} alt="" />
				</div>

				{/* Search Input Section */}
				<div className="search-box f_flex">
					<i className="fa fa-search"></i>
					<input
						type="text"
						placeholder="Search and hit enter..."
						aria-label="Search"
					/>
					<span>All Category</span>
				</div>

				{/* User Icon and Cart Section */}
				<div className="icon f_flex width">
					<div className="icon-Circle" ref={loginRef}>
					<i className="fa fa-user icon-circle" onClick={() => setShowLogin(prev => !prev)}></i>
					<ul style={{display: `${showLogin? 'block' : 'none'}`}}>
						<li onClick={() => setShowLogin(false)}>
							<Link to='/login'>Login</Link>
						</li>
						<li onClick={() => setShowLogin(false)}>
							<Link to='/register'>Register</Link>
						</li>
					</ul>
					</div>
					<div className="cart">
						<Link to="/cart">
							<i className="fa fa-shopping-bag icon-circle"></i>
							<span>{cartItem.length}</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
