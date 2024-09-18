import React, { useState } from "react";
import logo from "../../components/assets/images/logo1.svg";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
	const [showLogin, setShowLogin] = useState(false)
	// to toggle 'active' class based on scroll position
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});
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
					<div className="icon-Circle">
					<i className="fa fa-user icon-circle" onClick={() => setShowLogin(prev => !prev)}></i>
					<ul style={{display: `${showLogin? 'block' : 'none'}`}}>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
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
