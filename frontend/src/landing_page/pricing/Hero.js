import React from "react";

function Hero() {
    return ( 
        <div className="container">    
            <div className="row border-bottom mb-4 mt-4 text-center">
                <h2>Pricing</h2>
                <p className="p-3">
                    Free equity investments and flat ₹20 per order for intraday and F&O trades.
                </p>
            </div>
            <div className="row text-center p-5 mt-4 border-bottom">    
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="Pricing" className="img-fluid" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery trades are free.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="Pricing" className="img-fluid" />
                    <h3>Intraday & F&O</h3>
                    <p>Flat ₹20 per order for intraday and F&O trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingMF.svg" alt="Pricing" className="img-fluid" />
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are free.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;