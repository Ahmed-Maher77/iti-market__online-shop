import React from "react"
import Ndata from "./Ndata"  // Import product data

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt={val.name} />
              </div>
              {/* Display product name */}
              <h4>{val.name}</h4>
              {/* Display product price */}
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart