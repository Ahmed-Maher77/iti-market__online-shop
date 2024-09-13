import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";

const Pages = ({ productItems, cartItem, addToCart }) => {
	return (
		<>
			{/* Home component displaying cart items */}
			<Home cartItem={cartItem} />

			{/* FlashDeals component with product items and add-to-cart functionality */}
			<FlashDeals productItems={productItems} addToCart={addToCart} />

			{/* TopCate component displaying top categories */}
			<TopCate />
		</>
	);
};

export default Pages;
