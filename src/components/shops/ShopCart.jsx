import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0); // State to track the like count

  // Function to increment the like count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Map through shopItems to display each product */}
      {shopItems.map((item, index) => (
        <div className='box' key={index}>
          <div className='product mtop'>
            <div className='img'>
              {/* Marked Enhancement: Added descriptive alt text for images */}
              <span className='discount'>{item.discount}% Off</span>
              <img src={item.cover} alt={item.name} />
              <div className='product-like'>
                <label>{count}</label> <br />
                {/* Increment like count on click */}
                <i className='fa-regular fa-heart' onClick={increment}></i>
              </div>
            </div>
            <div className='product-details'>
              {/* Display product name */}
              <h3>{item.name}</h3>
              <div className='rate'>
                {/* Star rating display */}
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='price'>
                {/* Display product price */}
                <h4>${item.price}.00</h4>
                {/* Button to add item to cart */}
                <button onClick={() => addToCart(item)}>
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShopCart;
