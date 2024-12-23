import React, { useContext } from 'react';
import "./DisplayFood.css";
import { FoodContext } from '../../context/Context';
import FoodItem from '../FoodItemCard/FoodItem';
function DisplayFood({ category }) {
    const { FoodItems } = useContext(FoodContext);
    return (
        <>
            <div className="container mt-3">
                <div className="heading mb-4">
                    <h2>Top dishes near you</h2>
                </div>
                <div className='row g-4'>
                    {FoodItems.map((item, index) => {
                        if (category === item.category || category === 'all') {
                            return (
                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center' >
                                    <FoodItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} description={item.description} category={item.category} />
                                </div>
                            )
                        }

                    })
                    }
                    


                </div>
            </div>
        </>
    )
}

export default DisplayFood;
