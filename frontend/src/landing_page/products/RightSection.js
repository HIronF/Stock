import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row"> 
                <div className="col-6 mt-5 p-5"> 
                    <h1 className="mt-5">{productName}</h1>
                    <p className="mt-3">{productDescription}</p>
                    <div className="mb-3">
                        <a href={learnMore} className=" me" style={{textDecoration:"none"}}>Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-6 mb-6"> 
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;