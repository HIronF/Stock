import React from "react";

function Hero() {
    return ( 
        <div className="container mt-5 border-bottom">
            <div className="text-center mb-5">
                <h1 className="fs-2 mt-5">Technology</h1>
                <h3 className="fs-5 mt-3">Sleek, modern and intuitive trading platforms</h3>
                <p className="mt-3">
                    Check out our{ " "}
                    <a href="" className="text-decoration-none">
                        investment offerings {" "}
                        <i className="fa fa-long-arrow-right"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

export default Hero;