import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './components/Navbar';
import NavbarComponent from './components/Navbar';
import HeadingLayout from './components/HeadingLayout';
import Products from './components/Products';
import CartComponent from './components/CartComponent';

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
    <div>
      <CartComponent show={showCart}
        onHide={() => setShowCart(false)}></CartComponent>
      <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
      <HeadingLayout></HeadingLayout>
      <Products></Products>
    </div>
  );
}

export default App;
