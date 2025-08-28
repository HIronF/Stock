import React from "react";

function Team() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5">
                <h1 className="text-center border-top p-3">
                    People Behind AlphaTerminal
                </h1>
            </div>    
            <div className="row mb-5">
                <div className="col-6 text-center">
                    <img src="/media/images/hassan.jpg" alt="Team" style={{borderRadius: "100%",width:'50%',height:'80%'}}/>
                    <h5 className="mt-3">Hassan Khan</h5>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Hassan Khan is a software engineer with a passion for building scalable web applications. He has extensive experience in full-stack development and is the lead developer of AlphaTerminal.

                    </p>
                    <p>
                        With a background in information technology, Hassan has worked on various projects ranging from sports applications to stock trading platforms. He is dedicated to creating efficient and user-friendly software solutions.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;