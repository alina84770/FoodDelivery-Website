import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { FoodContext } from '../../context/Context';
function Navbar() {
  const [activeLink, setactiveLink] = useState('home');
  const [userStatus, setuserStatus] = useState("signup");
  const { cartItems, FoodItems, addToCart, removeFromCart, islogin, setlogin } = useContext(FoodContext);

  // Check if there are any items in the cart
  const hasItemsInCart = FoodItems.some((e) => cartItems[e.id] > 0);

  //handle form submission
  const clickHandler = (e) => {
    e.preventDefault();
    reset();
    setlogin("true");
    alert("Now you can get food items.");
  }

  return (
    <>

      <nav class="navbar navbar-expand-lg">
        <div className="container py-3">
          <img className="navbar-brand " src={logo} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  mb-2 mb-lg-0 mx-auto gap-4 d-flex align-items-center">

              <li className="nav-item">
                <NavLink to="/" onClick={() => setactiveLink('home')} className={({ isActive }) =>
                  isActive && activeLink === 'home' ? "active-link" : "nav-link"
                }
                >
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#menu" className={activeLink === 'menu' ? 'active-link' : 'nav-link'} onClick={() => setactiveLink('menu')}>menu</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#app" className={activeLink === 'mobile-app' ? 'active-link' : 'nav-link'} onClick={() => setactiveLink('mobile-app')} tabindex="-1" aria-disabled="true">mobile-app</a>
              </li>

              <li class="nav-item">
                <a className="nav-link" href="#Footer" className={activeLink === 'contact' ? 'active-link' : 'nav-link'} onClick={() => setactiveLink('contact')} tabindex="-1" aria-disabled="true">contact us</a>
              </li>

            </ul>

            <div className="navbar-right d-flex align-items-center justify-content-center gap-5 ">
              <i class="fa-solid fa-magnifying-glass"></i>
              <div className='d-flex'>
                <i class="fa-solid fa-cart-shopping" data-bs-toggle="offcanvas" data-bs-target="#cartItem"></i>
                {hasItemsInCart && <div className='counter rounded-pill'></div>}
              </div>
              <button className='btn px-4 py-2 text-light  fw-bold' data-bs-toggle="modal" data-bs-target="#signup">{islogin === "true" ? "logout" : "login"}</button>
            </div>
          </div>

        </div>

      </nav>

      {/* signup modal */}
      <div class="modal fade" tabindex="-1" id="signup">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title text-center">{userStatus === "signup" ? 'sign up' : "Login"}</h2>
              <button type="button" class="btn-close btn-success" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <form action="" className='form'>

                {userStatus === "signup" && <div className="input form-floating mt-4">
                  <input type="text" className='form-control' placeholder="name"/>
                  <label>Full Name</label>
                </div>}
                <div className="input form-floating  mt-4">
                  <input type="email" className='form-control' placeholder="email"/>
                  <label>Email Id</label>
                </div>
                <div className="input form-floating  mt-4">
                  <input type="password" className='form-control' placeholder="password"/>
                  <label>Password</label>
                </div>
                {userStatus === "signup" && <div className='mt-2'>
                  <p >If you have already account? <a className='text-success fw-bold' onClick={() => setuserStatus("login")}>login here</a></p>
                </div>}
              </form>
            </div>
            <div class="modal-footer mb-2">
              <button className='w-100 btn btn-success py-2 fs-5 fw-bold' onClick={clickHandler}>{userStatus === 'signup' ? "Create Account" : "Login"}</button>
            </div>
            {userStatus === 'login' && <p className='ps-4 pb-3'>Create New Account? <a className='text-success fw-bold' onClick={() => setuserStatus('signup')}>click here</a></p>}
          </div>
        </div>
      </div>



      {/* cart items offcanvas */}

      <div class="offcanvas offcanvas-end bg-dark text-light" tabindex="-1" id="cartItem" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Shopping Cart</h5>
          <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        {hasItemsInCart ?
          <div class="offcanvas-body">
            {FoodItems.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div>
                    <div className='cart-item mb-2'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price * cartItems[item.id]}</p>

                      <div className='food-qunatity'>
                        <i class="fa-solid fa-minus decre-quantity" onClick={() => removeFromCart(item.id)}></i>
                        <div>{cartItems[item.id]}</div>
                        <i class="fa-solid fa-plus incre-quantity" onClick={() => addToCart(item.id)}></i>
                      </div>

                    </div>

                  </div>

                )
              }

            })}

            <div className='cart-btns'>
              <Link to="./cart"><button>view cart</button></Link>
              <Link to="./checkout"><button>checkout</button></Link>
            </div>

          </div>
          : <p className='ms-3 text-danger'>No food Item is available in shopping cart.</p>}

      </div>
    </>
  )
}

export default Navbar;
