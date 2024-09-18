import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Sdata from "./components/shops/Sdata";

function App() {
	const { productItems } = Data; // Extract productItems from Data
	const { shopItems } = Sdata;
	const [cartItem, setCartItem] = useState([]); // State to manage cart items

	// Adds a product to the cart or updates the quantity if it already exists
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

	// Decreases the quantity of a product in the cart or removes it if the quantity is 1
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

	// Remove a product from the cart
	const removeFromCart = (product) => {
		setCartItem(cartItem.filter((item) => item.id !== product.id));
	};

	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Header cartItem={cartItem} />

				<Routes>
					<Route
						path="/"
						element={
							<Pages
								productItems={productItems}
								addToCart={addToCart}
								shopItems={shopItems}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								cartItem={cartItem}
								addToCart={addToCart}
								decreaseQty={decreaseQty}
								removeFromCart={removeFromCart}
							/>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
}

export default App;
