import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"


const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
	return (
		<>
			{/* Home component displaying cart items */}
			<Home cartItem={cartItem} />

			{/* FlashDeals component with product items and add-to-cart functionality */}
			<FlashDeals productItems={productItems} addToCart={addToCart} />

			{/* TopCate component displaying top categories */}
			<TopCate />

			{/* NewArrivals section */}
			<NewArrivals />

			{/* Discount section */}
			<Discount />

			{/* Shop component with shop items and add-to-cart functionality */}
			<Shop shopItems={shopItems} addToCart={addToCart} />

			{/* Annocument section */}
			<Annocument />

			{/* Wrapper component for additional features */}
			<Wrapper />
		</>
	);
};

export default Pages;
