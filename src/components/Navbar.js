import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from '../assets/cart.png'

function NavbarComponent(props) {
    let TotalItems=0

    const showCart=()=>{
      props.openCartItems()
      // console.log("opened")
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <button onClick={showCart}>
        <img style={{width:'12px',height:'12px',marginRight:'2px'}} src={Cart}></img>
        <span>{TotalItems}</span>
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">STORE</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;