import { useContext, useRef } from "react";
import CartContext from "../../store/CartContext";

const ProductForm = () => {
    const enterCandyNameInputRef = useRef();
    const enterDescriptionInputRef = useRef();
    const enterPriceInputRef = useRef();

    const cartCtx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredCandyName = enterCandyNameInputRef.current.value;
        const enteredDescription = enterDescriptionInputRef.current.value;
        const enteredPrice = enterPriceInputRef.current.value;
        
        const candies = {
            id: Math.random().toString(),
            candyName : enteredCandyName,
            description: enteredDescription,
            price: enteredPrice
        }
        cartCtx.addItem(candies);
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label>CandyName</label>
            <input type="text" ref={enterCandyNameInputRef} />
            <label>Description</label>
            <input type="text" ref={enterDescriptionInputRef} />
            <label>Price</label>
            <input type="number" ref={enterPriceInputRef} />
            <button type="submit"></button>
        </form>
        </>
    )
}

export default ProductForm;