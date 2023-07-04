import ReactDOM from "react-dom";
import classes from './CartOrder.module.css';
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Backdrop = (props) => {
    return(
        <>
        <div  onClick={props.onHideCart} />
        </>
    )
}

const ModalOverlay = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <>
        <div className={classes.modal}>
            <header>
                Cart
            </header>
            <div>
                {cartCtx.items.map((item) => (
                    <CartItem 
                    key={item.id}
                    candyName={item.candyName}
                    description={item.description}
                    price={item.price}
                    />
                    ))}
            </div>
            <div>
            
            </div>
            <footer>
                <button onClick={props.onHideCart}>
                    close
                </button>
            </footer>
        </div>
        </>
    )
}

const CartOrder = (props) => {
    return (
        <>
        {
            ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart}/>, document.getElementById('backdrop-root')
            )
        }
        {
            ReactDOM.createPortal(
                <ModalOverlay onHideCart={props.onHideCart} />, document.getElementById('overlay-root')
            )
        }
        </>
    );
};

export default CartOrder;