import React, { useContext,useEffect} from 'react';
import './CartItems.css';
import { FoodContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
function CartItems() {
    const { FoodItems, cartItems, removeFromCart,getTotalCartAmount } = useContext(FoodContext);
    useEffect(() => {
            AOS.init({ duration: 1000 });
        }, [])
    return (
        <>
            <div className="table-responsive container mt-5" data-aos="fade-down">
                <table className='table table-striped table-hover  text-center'>
                    <tr>
                        <th>Items</th>
                        <th>Titles</th>
                        <th>Pricy</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                    {FoodItems.map((item) => {
                        if (cartItems[item.id] > 0) {
                            return (<tr>
                                <td><img src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{cartItems[item.id]}</td>
                                <td>${item.price * cartItems[item.id]}</td>
                                <td><i className="fa-solid fa-trash" onClick={() => removeFromCart(item.id)}></i></td>
                            </tr>)
                        }
                    })}

                </table>
            </div>
            <div className="cartTotal-promo-code container">
                <table className="table cart-total" data-aos="fade-right">
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
                        <td>${getTotalCartAmount()+5}</td>
                    </tr>
                    <Link to='/checkout'><button className='mt-4 fw-bold'>proceed to checkout</button></Link>
                </table>
                <div className="promo-code-section" data-aos="fade-up">
                    <p>If you have a promo code? <span className='text-danger'>Enter it here</span></p>
                    <div>
                        <input type="text" placeholder='promo code' />
                        <button className='ms-1 fw-bold'>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;
