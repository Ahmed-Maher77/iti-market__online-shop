import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";

const Pages = ({ productItems, cartItem, addToCart }) => {
	return (
		<>
			<Home cartItem={cartItem} />
			<FlashDeals productItems={productItems} addToCart={addToCart} />
			<TopCate />
		</>
	);
};

export default Pages;
