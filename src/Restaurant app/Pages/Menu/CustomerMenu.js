import React, { useState} from 'react';
import Header from './New folder/components/Layout/Header';
import Meals from './New folder/components/Meals/Meals';
import Cart from './New folder/components/Cart/Cart';
import CartProvider from './New folder/store/CartProvider';

const CustomerMenu = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  
    return (
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
        </CartProvider>
    );
}

export default CustomerMenu;