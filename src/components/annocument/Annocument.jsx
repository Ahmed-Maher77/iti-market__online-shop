import React from "react"

const Annocument = () => {
  // Define styles for the images
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          {/* First image with custom styles */}
          <div className='img' style={mystyle}>
            <img src='./images/banner-1.png' width='100%' height='100%' alt="Banner 1" />
          </div>
          {/* Second image with custom styles */}
          <div className='img' style={mystyle1}>
            <img src='./images/banner-2.png' width='100%' height='100%' alt="Banner 2" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument