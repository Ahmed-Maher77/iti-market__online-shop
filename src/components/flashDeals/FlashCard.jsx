import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom next arrow component for the slider
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next' aria-label="Next Slide">
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
};

// Custom previous arrow component for the slider
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev' aria-label="Previous Slide">
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  );
};

// FlashCard component for rendering products in a carousel slider
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  // Increment the "likes" count for products
  const increment = () => {
    setCount(count + 1);
  };

  // Slider settings for responsive behavior and navigation
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productItems.map((item) => (
        <div className='box' key={item.id}>
          <div className='product mtop'>
            {/* Product image and discount display */}
            <div className='img'>
              <span className='discount'>{item.discount}% Off</span>
              <img src={item.cover} alt='' />
              <div className='product-like'>
                <label>{count}</label> <br />
                <i className='fa-regular fa-heart' onClick={increment} aria-label="Like Product"></i>
              </div>
            </div>

            {/* Product details section */}
            <div className='product-details'>
              <h3>{item.name}</h3>

              {/* Rating display (static for now) */}
              <div className='rate'>
              {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star" aria-hidden="true"></i>
                ))}
              </div>

              {/* Price and Add to Cart button */}
              <div className='price'>
                <h4>${item.price}.00</h4>
                <button onClick={() => addToCart(item)} aria-label="Add to Cart">
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};



export default FlashCard;
