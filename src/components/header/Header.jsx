import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
function Header() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <>
            <div className='header container'>
                <div className="row header-content">
                    <div className="col-lg-7 col-md-10 col-sm-12 px-4" data-aos="fade-right">
                        <h1 className='text-white'>Order your<br /> favourite food here</h1>
                        <p className='text-white'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise.Our mission is to satisfy your craving and elevate your diving experience, one delicious meal at a time.</p>
                        <button className='btn bg-white rounded text-secondary fw-bold'>view More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
