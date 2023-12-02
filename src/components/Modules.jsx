import React from "react";
import moduleImg from '../assets/images/mobile-cart-img.png'
const Modules = () => {
    return (
        <div>
            <div className="container pt-20 pt-md-60">
                <div className="d-flex items-center gap-15 justify-center ">
                    <p className="fs-base text-semibold text-center ff-work text-orange-gradient"> Modules</p>
                    <a href="#" className="d-flex items-center">
                        <svg
                            width="44"
                            height="1"
                            viewBox="0 0 44 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line y1="0.5" x2="44" y2="0.5" stroke="black" />
                            <line
                                y1="0.5"
                                x2="44"
                                y2="0.5"
                                stroke="url(#paint0_linear_19268_2038)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_19268_2038"
                                    x1="6.67021"
                                    y1="1"
                                    x2="7.99292"
                                    y2="7.77879"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FD9B2B" />
                                    <stop offset="1" stop-color="#F14F09" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
                <h2 className="text-black text-bold text-center ff-work fs-lg pb-md-60">
                    Why Choose <span className="text-orange-gradient">Maître D?</span>
                </h2>
                <div className="row pt-50">
                    <div className="col-md-6 col-12">
                        <img className="w-100" src={moduleImg} alt="module-img" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className="fs-medium text-bold text-black ffwork">Manage Your <span className="text-orange-gradient">Customer Queues</span></h2>
                        <p className="text-lightblack ff-work text-normal fs-base pt-10">The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                        <p className="text-lightblack ff-work text-normal py-25 fs-base">As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                        <button className=" mt-30 primary-btn bg-orange-gradient text-white ff-work fs-md text-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modules;
