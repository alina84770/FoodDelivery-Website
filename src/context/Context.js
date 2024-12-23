import { createContext,useState } from "react";
import FoodItems from '../assets/FoodItems';
export const FoodContext = createContext();



//initailize all products with quantity '0'
const cartfunctionality = () => {
    const cart = {};
    for (let i = 0; i < FoodItems.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const FoodItemContext = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartfunctionality());
    const[islogin,setlogin]=useState("false");

    //add to cart 
    const addToCart = (itemId) => {
        setCartItems((curr) => ({ ...curr, [itemId]: curr[itemId] + 1 }));
    }
    //remove from cart 
    const removeFromCart = (itemId) => {
        setCartItems((curr) => ({ ...curr, [itemId]: curr[itemId] - 1 }));
    }

    //cart total amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        FoodItems.map((item) => {
            if (cartItems[item.id] > 0) {
                totalAmount += item.price * cartItems[item.id];
            }
        })
        return totalAmount;
    }

    return (
        <FoodContext.Provider value={{ FoodItems, cartItems, addToCart, removeFromCart,getTotalCartAmount,islogin,setlogin }}>
            {children}
        </FoodContext.Provider>
    )
}
export default FoodItemContext;