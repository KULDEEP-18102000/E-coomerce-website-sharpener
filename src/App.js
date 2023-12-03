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
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';

// const routeDefinitions= createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductPage/>}/>
//   </Route>
// )

const router= createBrowserRouter([
  {path:'/',element:<RootLayout/>,children:[
    {path:'/',element:<HomePage/>},
    {path:'/products',element:<ProductPage/>},
    {path:'/about',element:<AboutPage/>}
  ]}
  
])

// const router=createBrowserRouter(routeDefinitions)

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
    // <CartProvider>
    //   <CartComponent show={showCart}
    //     onHide={() => setShowCart(false)}></CartComponent>
    //   <NavbarComponent openCartItems={showCartItems}></NavbarComponent>
    //   <HeadingLayout></HeadingLayout>
    //   <Products></Products>
    // </CartProvider>

    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;
