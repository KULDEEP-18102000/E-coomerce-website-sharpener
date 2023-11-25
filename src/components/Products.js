import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../store/cart-context';
import { useContext } from 'react';

function Products() {

  const ctx=useContext(CartContext)
  console.log(ctx)
    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
    
        const addToCart=(item)=>{
          console.log(item)
          ctx.addItem(item)
        }
        
  return (
    <Container>
    <h4>Products</h4>
    <Row>
    {productsArr.map((item) => (
          // Using map to create <li> elements dynamically
          <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button onClick={()=>{addToCart(item)}} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        ))}
        </Row>
    </Container>
  );
}

export default Products;