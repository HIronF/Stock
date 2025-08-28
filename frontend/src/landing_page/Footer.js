import React from 'react';

function Footer() {
    return (
        <footer> {/* ✅ Changed from <Footer> to <footer> */}
            <div className='container border-top mt-5 pt-5'>
                <div className='row'>
                    <div className='col'>
                        <a className="navbar-brand" href="#" style={{ color: "skyblue", fontWeight: "bold" }}>AlphaStock</a>
                    </div>
                    <div className='col'>
                        <p>Company</p>
                        <a href='' className='footer-link'>About</a>
                        <br />
                        <a href='' className='footer-link'>Philosophy</a>
                        <br />
                        <a href='' className='footer-link'>Press & media</a>
                        <br />
                        <a href='' className='footer-link' >Careers</a>
                        <br />
                        <a href='' className='footer-link'>Zerodha Cares (CSR)</a>
                        <br />
                        <a href='' className='footer-link'>Zerodha.tech</a>
                        <br />
                        <a href='' className='footer-link'>Open source</a>
                        <br />
                    </div>
                    <div className='col'>
                        <p>Support</p>
                        <a href='' className='footer-link'>Contact us</a>
                        <br />
                        <a href='' className='footer-link'>Support portal</a>
                        <br />
                        <a href='' className='footer-link'>How to file a complaint?</a>
                        <br />
                        <a href='' className='footer-link'>Status of your complaints</a>
                    </div>
                    <div className='col'>
                        <p>Account</p>
                        <a href='' className='footer-link'>Open demat account</a>
                        <br />
                        <a href='' className='footer-link'>Minor demat account</a>
                        <br />
                        <a href='' className='footer-link'>NRI demat account</a>
                        <br />
                        <a href='' className='footer-link'>Commodity</a>
                    </div>
                </div>
            </div>
        </footer> 
    );
}

export default Footer;
