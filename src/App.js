
import { useState } from 'react';
import './App.css';
import MainNavigation from './components/MainNavigation/MainNavigation';
import CartOrder from './components/Cart/CartOrder';

function App() {
  const [showCart, setShowCart] = useState(false)

  const onShowCartHandler = () => {
        setShowCart(true);
  }
  const onHideCartHandler = () => {
        setShowCart(false);
  }

  return (
    <div>
      <MainNavigation onShowCart={onShowCartHandler} />
     {showCart && <CartOrder onHideCart={onHideCartHandler} />}
    </div>
  );
}

export default App;
