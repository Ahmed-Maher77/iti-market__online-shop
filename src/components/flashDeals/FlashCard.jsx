import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  );
};

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

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
            <div className='img'>
              <span className='discount'>{item.discount}% Off</span>
              <img src={item.cover} alt='' />
              <div className='product-like'>
                <label>{count}</label> <br />
                <i className='fa-regular fa-heart' onClick={increment}></i>
              </div>
            </div>

            <div className='product-details'>
              <h3>{item.name}</h3>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>

              <div className='price'>
                <h4>${item.price}.00</h4>
                <button onClick={() => addToCart(item)}>
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
