import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CartComponent(props){

    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
        ]

        const [cartItems,setCartItems]=useState(cartElements)

        const removeFromCart=(item)=>{
            console.log("remove")
            let new_elements=cartItems.filter((element)=>{
                return element.title!=item.title
            })
            console.log(new_elements)
            setCartItems(new_elements)
        }

        const CartItems=<ul>
            {cartItems.map((item)=>
            <div><li>{item.title}-{item.price}-{item.quantity}</li>
            <span>
            <button onClick={()=>{removeFromCart(item)}}>Remove</button>
            </span>
                        </div>
            )}
        </ul>

    return(
<div>
        

        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {CartItems}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    )
}

export default CartComponent