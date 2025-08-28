import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h2 className="mt-5">The Zerodha Universe</h2>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4">
                    <img src="/media/images/smallcaseLogo.png" alt="Partner 1" className="img-fluid mt-3" />
                </div>
                <div className="col-4">
                    <img src="/media/images/streakLogo.png" alt="Partner 2" className="img-fluid mt-3" style={{ maxWidth: "50%", height: "auto" }} />
                </div>
                <div className="col-4">
                    <img src="/media/images/zerodhaFundhouse.png" alt="Partner 3" className="img-fluid mt-3" style={{ maxWidth: "50%", height: "auto" }} />
                </div>
                <button style={{width:"15%",margin:"0 auto"}} className="p-2 btn btn-primary mt-5">
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;