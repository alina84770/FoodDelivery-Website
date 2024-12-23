import React, { useContext,useEffect } from 'react';
import './Checkout.css';
import { FoodContext } from '../../context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Checkout() {
    const { getTotalCartAmount } = useContext(FoodContext);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <>
            <div className="checkout container mt-5 row">

                <div className="col-lg-6" data-aos="fade-right">
                    <form className="checkout-form">
                        <h3 className='text-center'>Delivery Information</h3>
                        <div className="row justify-content-center input mt-3 py-2">
                            <input type="text" placeholder='first name' className='col py-2' />
                            <input type="text" placeholder='Last name' className='col  ms-3 py-2' />
                        </div>

                        <div className="row justify-content-center mt-3">
                            <input type="text" placeholder='Email Address' className='input-data py-2' />
                        </div>

                        <div className="row justify-content-center mt-3">
                            <input type="text" placeholder='Street' className='input-data py-2' />
                        </div>

                        <div className="row justify-content-center input mt-3">
                            <input type="text" placeholder='City' className='col py-2' />
                            <input type="text" placeholder='State' className='col ms-3 py-2' />
                        </div>

                        <div className="row justify-content-center input mt-3">
                            <input type="code" placeholder='Zipcode' className='col py-2' />
                            <input type="text" placeholder='Country' className='col ms-3 py-2' />
                        </div>

                        <div className="row justify-content-center mt-3">
                            <input type="tel" placeholder='Phone' className='input-data py-2' />
                        </div>

                    </form>
                </div>

                <div className='cart-total col-lg-4' data-aos="fade-left">
                    <table className="table cart-total">
                        <h3>Cart summary</h3>
                        <tr className="cart-price-info">
                            <td>Subtotal</td>
                            <td>${getTotalCartAmount()}</td>
                        </tr>
                        <tr className="cart-price-info">
                            <td>Delivery Fee</td>
                            <td>$5</td>
                        </tr>
                        <tr className="cart-price-info">
                            <td>Total</td>
                            <td>${getTotalCartAmount() + 5}</td>
                        </tr>
                        <button className='mt-4 fw-bold'>proceed to payment</button>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Checkout;
