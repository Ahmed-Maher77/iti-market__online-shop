import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ cartItem }) => {
	return (
		<>
			<Head />
			<Search cartItem={cartItem} />
			<Navbar />
		</>
	);
};

export default Header;
