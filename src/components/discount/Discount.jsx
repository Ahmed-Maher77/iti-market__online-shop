import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            {/* Heading section */}
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='Gift icon for discounts' />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              {/* Action link for viewing all discount items */}
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          {/* Discount card component containing the slider */}
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount