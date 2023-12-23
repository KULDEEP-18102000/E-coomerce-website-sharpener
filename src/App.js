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
// import ProductPage from './pages/Product';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import AuthPage from './pages/AuthPage';
// import ProductDetail from './pages/ProductDetail';

import RootLayout from './pages/Root';
import CartContext from './store/cart-context';
import { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { lazy,Suspense } from 'react';

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

const ProductDetailComponent=lazy(()=>import('./pages/ProductDetail'))
const ProductPageComponent=lazy(()=>import('./pages/Product'))
const AboutPageComponent=lazy(()=>import('./pages/About'))
const ContactPageComponent=lazy(()=>import('./pages/Contact'))

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
      {ctx.isLoggedIn && 
      // <ProductPage/>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPageComponent />
      </Suspense>
      }
      {!ctx.isLoggedIn && <Redirect to='/auth'/>}
      {/* <ProductPage/> */}
    </Route>
    
    {/* <Route path="/productDetail/:productId"> */}
      {/* <ProductDetail/> */}
      {/* <Suspense fallback={<div>...Loading</div>}> */}
        {/* <ProductDetailComponent {...props} /> */}
      {/* </Suspense> */}
    {/* </Route> */}
    <Route
            path="/productDetail/:productId"
            render={(props) => (
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailComponent {...props} />
              </Suspense>
            )}
          />
    <Route path="/about">
      {/* <AboutPage/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPageComponent />
      </Suspense>
    </Route>
    <Route path="/auth">
      <AuthPage/>
    </Route>
    <Route path="/contact">
      {/* <ContactPage/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPageComponent />
      </Suspense>
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
