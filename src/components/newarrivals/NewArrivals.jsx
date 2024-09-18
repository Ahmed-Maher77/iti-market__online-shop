import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          {/* Heading with left and right sections */}
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt="New arrivals icon"/>
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              {/* 'View all' section with navigation arrow */}
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          {/* Render the Cart component to display products */}
          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals