import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../store/cart-context';
import { useContext,useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Products() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history=useHistory()

  const ctx=useContext(CartContext)
  // console.log(ctx)
    const productsArr = [
        {
        id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
    
        const addToCart=(item)=>{
          console.log(item)
          console.log(ctx)
          // console.log("ctx")
          let flag=false
          for (let index = 0; index < ctx.cartState.items.length; index++) {
            const element = ctx.cartState.items[index];
            if(element.title==item.title){
              flag=true
            }
          }
          console.log(flag)
          if(flag==true){
            console.log("if")
            setOpen(true)
          }else{
            console.log("else")
            ctx.addItem(item)
          }
          
        }

        const redirectToProductDetails=(id)=>{
          history.push(`/productDetail/${id}`)
        }
        
  return (
    <div>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This Item is already added in cart
          </Typography>
        </Box>
      </Modal>

    <Container>
    <h4>Products</h4>
    <Row>
    {productsArr.map((item) => (
          // Using map to create <li> elements dynamically
          <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imageUrl} onClick={()=>{redirectToProductDetails(item.id)}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="contained" onClick={()=>{addToCart(item)}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        ))}
        </Row>
    </Container>
    </div>
  );
}

export default Products;