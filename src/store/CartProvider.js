
import { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = (props) => {

    const [cartItemState, setCartItemState] = useState([])
    const addItemHandler = () => {

    }

    const cartContext = {
        items: cartItemState,
        addItem: addItemHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;