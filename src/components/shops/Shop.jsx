import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* Category component for displaying categories */}
          <Catg />

          <div className='contentWidth'>
            {/* Heading for the mobile phones section */}
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div className='heading-right row '>
                {/* Navigation to view all items */}
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            {/* Product content grid displaying items from ShopCart */}
            <div className='product-content  grid1'>
              {/* ShopCart component to display and manage shop items */}
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop