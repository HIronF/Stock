import React from "react";

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src='/media/images/homeHero.png' alt="Hero Image" className="mb-5" />
                <h1 className="mt-5">
                    Invest in everything, everywhere, anytime
                </h1>
                <p>
                    Join the revolution in investing with our platform. 
                    Access global markets, trade stocks,mutual funds, and more with ease.
                </p>
                <button style={{width:"20%",margin:"0 auto"}} className="p-2 btn btn-primary">
                    Signup Now
                </button> 
            </div>
        </div>
    );
}

export default Hero;