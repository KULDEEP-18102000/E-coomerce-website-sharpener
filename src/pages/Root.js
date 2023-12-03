import { Outlet } from "react-router-dom"
import { useState } from "react";
// import NavbarComponent from './components/Navbar';
// import HeadingLayout from './components/HeadingLayout';
// import Products from './components/Products';
// import CartComponent from './components/CartComponent';
// import CartProvider from './store/CartProvider';
import NavbarComponent from "../components/Navbar";
import HeadingLayout from "../components/HeadingLayout";
import Products from "../components/Products";
import CartComponent from "../components/CartComponent";
// import CartProvider from "../store/CartProvider";

function RootLayout(){

    const [showCart,setShowCart]=useState(false)

  const showCartItems=()=>{
    setShowCart(true)
    // console.log(showCart)
  }

  const hideCartItems=()=>{
    setShowCart(false)
  }

    return(
        <>
        {/* <CartProvider> */}
      <CartComponent show={showCart}
        onHide={() => setShowCart(false)}></CartComponent>
      <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
      <HeadingLayout></HeadingLayout>
      {/* <Products></Products> */}
    {/* </CartProvider> */}
        <Outlet/>
        </>
        
    )
}

export default RootLayout