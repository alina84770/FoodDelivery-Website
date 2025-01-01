import React, { useContext, useEffect } from 'react';
import './FoodItem.css';
import rating from '../../assets/rating_starts.png';
import { FoodContext } from '../../context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
function FoodItem({ id, image, name, description, price }) {

  const { cartItems, addToCart, removeFromCart, islogin, setlogin } = useContext(FoodContext);
  const clickHandler = () => {
    if (islogin === "true") {
      addToCart(id);
    }
    else {
      alert("login is required to get food item.");
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])


  return (
    <>
     
        <div className="card" data-aos="fade-right">
          <div className='card-info'>
          <div className="image-container">
            <img loading="lazy" src={image} className="card-img-top" alt="..." />
            {cartItems[id] === 0 ?
              <i class="fa-solid fa-plus add-item" onClick={clickHandler}></i>
              : <div className='add-remove-item'>
                <i class="fa-solid fa-minus remove-item" onClick={() => removeFromCart(id)}></i>
                <div>{cartItems[id]}</div>
                <i class="fa-solid fa-plus add-food" onClick={() => addToCart(id)}></i>
              </div>
            }
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <img src={rating} alt="" />
            <p className="card-text mt-1">{description}</p>
            <h5 className='price'>${price}</h5>
          </div>
          </div>
        </div>
      
    </>
  )
}

export default FoodItem;
