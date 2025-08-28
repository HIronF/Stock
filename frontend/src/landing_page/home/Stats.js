import React from "react";

function Stats() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 className="pt-5 fs-2">Trust With Confidence</h1>
                    <h3 className="pt-5 fs-4">Customer Always First</h3>
                    <p className="text-muted">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h3 className="fs-4">No spam or gimmicks</h3>
                    <p className="text-muted"> 
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>   
                </div>
                <div className="col-6">
                    <img src="/media/images/ecosystem.png" alt="Stats Image" style={{width:"90%"}}  />
                    <div className="text-center">
                        <a href="" style={{textDecoration:"none"}}>Explore our product <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;