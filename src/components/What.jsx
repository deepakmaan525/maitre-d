import React from 'react'
import whatImg from '../assets/images/mobile-cart-img.png'
const What = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-12">
            <img className='w-100' src={whatImg} alt="what-sec-img" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-center">
            <p className='fs-base text-semibold text-orange-gradient ff-work '>About Us</p>
            <h2 className='text-black fs-lg text-bold ff-work py-13'>What is<span className='text-orange-gradient'> Maître D?</span></h2>
            <p className='text-lightblack fs-base text-normal ff-work'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
        </div>
      </div>
    </div>
  )
}

export default What
