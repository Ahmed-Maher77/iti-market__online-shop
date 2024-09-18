import React from "react";
import "./style.css";

const Cart = ({ cartItem, addToCart, decreaseQty, removeFromCart }) => {
	// Calculate total price of items in the cart
	const totalPrice = cartItem.reduce(
		(price, item) => price + item.qty * item.price,
		0
	);

	return (
		<>
			<section className="cart-items">
				<div className="container d_flex">
					{/* Cart details section */}
					<div className="cart-details">
						{/* Display message if no items are in the cart */}
						{cartItem.length === 0 && (
							<h1 className="no-items product">
								No Items are added to the Cart
							</h1>
						)}

						{/* Map through cart items to display each item */}
						{cartItem.map((item) => {
							const productQty = item.price * item.qty;
							return (
								<div className="cart-list product d_flex" key={item.id}>
									{/* Product image */}
									<div className="img">
										<img src={item.cover} alt={item.name} />
									</div>
									{/* Product details */}
									<div className="cart-details">
										<h3>{item.name}</h3>
										<h4>
											${item.price}.00 * {item.qty}
											<span>${productQty}.00</span>
										</h4>
									</div>
									{/* Control buttons to modify cart item quantity */}
									<div className="cart-items-function">
										{/* Remove item from the cart */}
										<div className="removeCart">
											<button onClick={() => removeFromCart(item)} aria-label={`Remove ${item.name}`}>
												<i className="fa-solid fa-xmark"></i>
											</button>
										</div>

										{/* Increase or decrease item quantity */}
										<div className="cartControl d_flex">
											<button
												className="incCart"
												aria-label={`Increase quantity of ${item.name}`}
												onClick={() => addToCart(item)}
											>
												<i className="fa-solid fa-plus"></i>
											</button>
											<button
												className="desCart"
												aria-label={`Decrease quantity of ${item.name}`}
												onClick={() => decreaseQty(item)}
											>
												<i className="fa-solid fa-minus"></i>
											</button>
										</div>
									</div>

									<div className="cart-item-price"></div>
								</div>
							);
						})}
					</div>
					{/* Cart total summary */}
					<div className="cart-total product">
						<h2>Cart Summary</h2>
						<div className=" d_flex">
							<h4>Total Price :</h4>
							<h3>${totalPrice}.00</h3>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
