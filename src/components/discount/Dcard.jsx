import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata"; // Import data for the slider
import "../newarrivals/style.css";

const Dcard = () => {
	// Slider settings configuration
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		margin: 200,
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
		<>
			<Slider {...settings}>
				{Ddata.map((value, index) => (
					<div className="box product" key={index}>
						{/* Product image */}
						<div className="img">
							<img src={value.cover} alt={`${value.name}`} width="100%" />
						</div>
						{/* Product name */}
						<h4>{value.name}</h4>
						{/* Product price */}
						<span>{value.price}</span>
					</div>
				))}
			</Slider>
		</>
	);
};

export default Dcard;
