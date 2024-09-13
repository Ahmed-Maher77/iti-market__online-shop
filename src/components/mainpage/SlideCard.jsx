import React from "react";
import Sdata from "./Sdate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // Custom styling for the dots
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        }
    };
    return(
        <>
            <Slider {...settings}>
                {/* Loop through the data and display each item as a slide */}
                {Sdata.map((value) => (
                        <div className='box d_flex top' key={value.id}>
                            {/* Left section with title, description, and button */}
                            <div className='left'>
                                <h1>{value.title}</h1>
                                <p>{value.desc}</p>
                                <button className='btn-primary'>Visit Collections</button>
                            </div>
                            {/* Right section with image */}
                            <div className='right'>
                                <img src={value.cover} alt={value.title} />
                            </div>
                        </div>
                ))}
            </Slider>
        </>
    )
};


export default SlideCard;