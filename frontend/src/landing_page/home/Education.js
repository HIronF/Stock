import React from "react";

function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src='/media/images/education.svg' alt="education" style={{width:"70%"}} />
                </div>
                <div className="col-6 pt-5">
                    <h1 className="fs-2 mb-3">Free and open market education</h1>
                    <p> 
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. 
                    </p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class name="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className="mt-4"> 
                        TradingQ&A, the most active trading and investment community in India for all your market related queries. 
                    </p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class name="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>    
        </div>
     );
}

export default Education;