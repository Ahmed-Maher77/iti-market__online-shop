import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCart = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 580,
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
				{Tdata.map((value, index) => (
					<div className="box product" key={index}>
						<div className="nametop d_flex">
							<span className="tleft">{value.para}</span>
							<span className="tright">{value.desc}</span>
						</div>
						<div className="img">
							<img src={value.cover} alt="" />
						</div>
					</div>
				))}
			</Slider>
		</>
	);
};

export default TopCart;
