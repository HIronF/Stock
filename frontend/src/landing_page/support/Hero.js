import React from "react";

function Hero() {
    return ( 
        <section className="container-fluid mt-5" id="support_hero">
            <div className="p-5" id="supportwrapper">
                <h4>Support Portal</h4>
                <a href="/support">Track Tickets</a>
            </div>
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                    <a href="">Track account opening</a>
                    <a href="" id="s_link">Track segment activation</a>
                    <a href="" id="s_link">Intraday margins</a>
                    <a href="" id="s_link">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a href="">Current Takeovers and Delisting - January 2025</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;