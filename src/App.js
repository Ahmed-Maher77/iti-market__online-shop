import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";

function App() {
	const { productItems } = Data;

	const [cartItem, setCartItem] = useState([]);

	const addToCart = (product) => {
		const productExit = cartItem.find((item) => item.id === product.id);
		if (productExit) {
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty + 1 }
						: item
				)
			);
		} else {
			setCartItem([...cartItem, { ...product, qty: 1 }]);
		}
	};

	const decreaseQty = (product) => {
		const productExit = cartItem.find((item) => item.id === product.id);
		if (productExit.qty === 1) {
			setCartItem(cartItem.filter((item) => item.id !== product.id));
		} else {
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty - 1 }
						: item
				)
			);
		}
	};

	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Header cartItem={cartItem} />                                          
				<Routes>
					<Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} />} />
						

					<Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
						
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
