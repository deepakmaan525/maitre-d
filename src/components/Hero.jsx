import React from 'react'
import curluImg from '../assets/images/curly-img.png'
const Hero = () => {
  return (
    <>
      <div className="container relative">
        <h1 className='fs-xxl text-bolder text-black pt-md-90 text-center max-w-755 mx-auto ff-work'>Maitre D – Store Management for Barbers</h1>
        <div className="text-center pt-60"><button className='primary-btn text-white fs-md ff-work text-semibold bg-orange-gradient'>Submit</button></div>
        <img className='hero-ellpse' src={curluImg} alt="ellipse" />
      </div>
    </>
  )
}

export default Hero
