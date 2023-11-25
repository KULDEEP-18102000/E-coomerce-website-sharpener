import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './components/Navbar';
import NavbarComponent from './components/Navbar';
import HeadingLayout from './components/HeadingLayout';
import Products from './components/Products';
import CartComponent from './components/CartComponent';
import CartProvider from './store/CartProvider';

function App() {

  

  const [showCart,setShowCart]=useState(false)

  const showCartItems=()=>{
    setShowCart(true)
    // console.log(showCart)
  }

  const hideCartItems=()=>{
    setShowCart(false)
  }

  return (
    <CartProvider>
      <CartComponent show={showCart}
        onHide={() => setShowCart(false)}></CartComponent>
      <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
      <HeadingLayout></HeadingLayout>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
