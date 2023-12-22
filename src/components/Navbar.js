import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from '../assets/cart.png'
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent(props) {

    const ctx=useContext(CartContext)
    console.log(ctx)

    

    const showCart=()=>{
      props.openCartItems()
      // console.log("opened")
    }

  return (
    // <Navbar expand="lg" classNameName="bg-body-tertiary">
    //   <Container>
    //     <button onClick={showCart}>
    //     <img style={{width:'12px',height:'12px',marginRight:'2px'}} src={Cart}></img>
    //     <span>{ctx.cartState.items.length}</span>
    //     </button>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav classNameName="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/products">STORE</Nav.Link>
    //         <Nav.Link href="/about">About</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button onClick={showCart}>
      <img style={{width:'12px',height:'12px',marginRight:'2px'}} src={Cart}></img>
      <span>{ctx.cartState.items?.length}</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">STORE</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to="/auth">Login</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>  
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavbarComponent;