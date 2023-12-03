import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from '../assets/cart.png'
import { useContext } from 'react';
import CartContext from '../store/cart-context';

import { Link } from 'react-router-dom';

function NavbarComponent(props) {

    const ctx=useContext(CartContext)

    const showCart=()=>{
      props.openCartItems()
      // console.log("opened")
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <button onClick={showCart}>
        <img style={{width:'12px',height:'12px',marginRight:'2px'}} src={Cart}></img>
        <span>{ctx.cartState.items.length}</span>
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">STORE</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">Products</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default NavbarComponent;