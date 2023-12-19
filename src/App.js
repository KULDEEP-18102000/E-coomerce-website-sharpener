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
// import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import AuthPage from './pages/AuthPage';
import ProductDetail from './pages/ProductDetail';
import RootLayout from './pages/Root';
import CartContext from './store/cart-context';
import { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';

// const routeDefinitions= createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductPage/>}/>
//   </Route>
// )

// const router= createBrowserRouter([
//   {path:'/',element:<RootLayout/>,children:[
//     {path:'/',element:<HomePage/>},
//     {path:'/products',element:<ProductPage/>},
//     {path:'/about',element:<AboutPage/>}
//   ]}
  
// ])

// const router=createBrowserRouter(routeDefinitions)

function App() {

  

  const [showCart,setShowCart]=useState(false)

  const ctx=useContext(CartContext)

  console.log(ctx)

  const showCartItems=()=>{
    setShowCart(true)
    // console.log(showCart)
  }

  const hideCartItems=()=>{
    setShowCart(false)
  }

  return (
    <>
    
    <CartComponent show={showCart}
        onHide={() => setShowCart(false)}></CartComponent>
      <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
    <Route exact path="/">
      <HomePage/>
    </Route>
    <Route path="/products">
      {ctx.isLoggedIn && <ProductPage/>}
      {!ctx.isLoggedIn && <Redirect to='/auth'/>}
      {/* <ProductPage/> */}
    </Route>
    <Route path="/productDetail/:productId">
      <ProductDetail/>
    </Route>
    <Route path="/about">
      <AboutPage/>
    </Route>
    <Route path="/auth">
      <AuthPage/>
    </Route>
    <Route path="/contact">
      <ContactPage/>
    </Route>
    
    </>
    // <CartProvider>
    //   <CartComponent show={showCart}
    //     onHide={() => setShowCart(false)}></CartComponent>
    //   <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
    //   <HeadingLayout></HeadingLayout>
    //   <Products></Products>
    // </CartProvider>

    // <CartProvider>
    // <RouterProvider router={router}/>
    // </CartProvider>
  );
}

export default App;
