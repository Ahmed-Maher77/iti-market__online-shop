import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({ productItems, addToCart }) => {
    return(
        <>
            {/* Flash Deals section with a heading and FlashCard component */}
            <section className="flash background">
                <div className="container">
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Flash Deals</h1>
                    </div>

                    {/* Rendering FlashCard component with productItems and addToCart props */}
                    <FlashCard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        </>
    )
};

export default FlashDeals;