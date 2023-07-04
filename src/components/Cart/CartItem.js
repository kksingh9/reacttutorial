

const CartItem = (props) => {
    return (
        <>
        <li>
            <span>{props.candyName}</span>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <button>buy one</button>
            <button>buy two</button>
            <button>buy three</button>
        </li>
        </>
    );
}

export default CartItem;