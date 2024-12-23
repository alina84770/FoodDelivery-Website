import React,{useEffect} from 'react'
import menu_item_list from '../../assets/menu-items';
import './ExploreMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function ExploreMenu({category,setcategory}) {

  useEffect(() => {
          AOS.init({ duration: 1000 });
      }, [])

  return (
    <div className="menu-items container mt-5" id="menu">
      <div data-aos="fade-down">
      <h1>Explore our menu</h1>
      <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise.Our mission is to satisfy your craving and elevate your diving experience, one delicious meal at a time.</p>
      </div>
      <div className='menu-dishes'>
        {menu_item_list.map((item, index) => {
          return (
            <div  key={index} className="menu-food-item" onClick={()=>setcategory((curr)=>curr===item.menu_name?"all":item.menu_name)}>
              <img className={category===item.menu_name?"active":""} src={item.menu_img} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;
