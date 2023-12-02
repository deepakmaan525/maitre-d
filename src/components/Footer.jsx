import React from 'react'
import footerimg from '../assets/images/footer-logo.svg'


const Footer = () => {
    return (
        <div className='footer-bg position-relative'>
            <div className="container pt-50">
                <div className='d-flex flex-column items-center justify-center pt-md-60'>
                    <div className="text-center"><img className='pb-15 footer-logo' src={footerimg} alt="fooeter-img" /></div>
                    <p className='fs-sm ff-work text-normal text-white max-w-370 text-center mx-auto mb-35'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                </div>
                <div className='d-flex items-center justify-center gap-50 py-30'>
                    <p className='fs-sm ff-work text-semibold  text-white'>Navigation</p>
                    <p className='fs-sm ff-work text-semibold  text-white'>Company</p>
                    <p className='fs-sm ff-work text-semibold  text-white'>Contact</p>

                </div>
            </div>
            <p className='ff-work text-normal fs-s-sm text-gray text-center footer-line py-13'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
        </div>
    )
}

export default Footer