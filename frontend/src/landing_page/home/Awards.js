import React from "react";

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/media/images/largestBroker.svg"></img>
                </div>    
                <div className="col-6 p-5 mt-5">
                    <h1 className="text-center">Largest Brokerage in India</h1>
                    <p className="text-center">
                        We are the largest brokerage firm in India, 
                        serving millions of satisfied customers with our 
                        top-notch services and innovative solutions.
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Stock & Ipo</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>    
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Futures & Options</p></li>
                                <li><p>Mutual funds</p></li>
                                <li><p>Bonds & Govt. Sceurities</p></li>
                            </ul>    
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" alt="pressLogos" className="img-fluid mt-4" style={{width:"90%"}} />
                </div>    
                    
            </div>
        </div>
     );
}

export default Awards;