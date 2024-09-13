import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ cartItem }) => {
	return (
		<>
			{/* Head component for top bar with contact info and language options */}
			<Head />
			{/* Search component receives cartItem as a prop for cart display */}
			<Search cartItem={cartItem} />
			{/* Navbar component for navigation links */}
			<Navbar />
		</>
	);
};

export default Header;
