import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
function Footer() {
    return (
        <>
            <div className='footer' id="Footer">
                <div className="row justify-content-center gap-3">

                    <div className="footer-left col-lg-4 col-md-3 col-sm-7 col-8">
                        <img src={logo} alt="" className='mb-3' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod, distinctio enim repudiandae explicabo accusantium.</p>
                        <div className="social-icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>

                    </div>

                    <div className="footer-center col-lg-3 col-md-3 col-sm-7 col-8">
                        <h4>COMPANY</h4>
                        <div>Home</div>
                        <div>About us</div>
                        <div>Delivery</div>
                        <div>Privacy Policy</div>
                    </div>

                    <div className="footer-right col-lg-3 col-md-3 col-sm-7 col-8">
                        <h4>GET IN TOUCH</h4>
                        <div>+1-345-678-4539</div>
                        <div>contact@tomato.com</div>
                    </div>

                </div>
                <hr />
                <div className="footer-copyright d-flex justify-content-center align-items-center  py-3">
                    <p className='text-center'>Copyright 2024 <span className='copyright'>&copy;</span> Tomato.com - All Right Reserved.</p>
                </div>

            </div>
        </>
    )
}

export default Footer;
