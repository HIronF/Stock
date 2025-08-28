import React from "react";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5">
            <div className="row"> 
                <div className="col-md-6 mb-4 mb-md-0 p-5"> 
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
                <div className="col-md-6 mt-5 p-5"> 
                    <h1>{productName}</h1>
                    <p className="mt-3">{productDescription}</p>
                    <div className="mb-3">
                        <a href={tryDemo} className=" me-2" style={{textDecoration:"none"}}>Try Demo</a>
                        <a href={learnMore} className=" me" style={{textDecoration:"none",marginLeft:"75px"}}>Learn More</a>
                    </div>
                    <div>
                        <a href={googlePlay} className=" me-2">
                            <img src="/media/images/googlePlayBadge.svg" alt="Google Play" height="40" />
                        </a>
                        <a href={appStore} className="btn btn-light">
                            <img src="/media/images/appstoreBadge.svg" alt="App Store" height="40" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
