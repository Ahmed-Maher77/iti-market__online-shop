import React from 'react'
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          {/* Heading section with left and right alignment */}
          <div className='heading d_flex'>
            {/* Left side of the heading with icon and title */}
            <div className='heading-left row  f_flex'>
              <i className='fa fa-border-all' aria-hidden="true"></i>
              <h2>Top Categories</h2>
            </div>

            {/* Right side of the heading with link to view all */}
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa fa-caret-right' aria-hidden="true"></i>
            </div>
          </div>
          
          {/* Component displaying top categories */}
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
