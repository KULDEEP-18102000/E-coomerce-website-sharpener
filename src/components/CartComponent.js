import React,{useState,useContext} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from "../store/cart-context";
import { useEffect } from "react";
import axios from "axios";


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

        const ctx=useContext(CartContext)
        console.log(ctx)

        const [cartItems,setCartItems]=useState(cartElements)

        

        const removeFromCart=(item)=>{
            // console.log("remove")
            // let new_elements=cartItems.filter((element)=>{
            //     return element.title!=item.title
            // })
            // console.log(new_elements)
            // setCartItems(new_elements)
            ctx.removeItem(item)
        }

        
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
          Cart Items
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {CartItems} */}
        <table className="table">
        <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {console.log(cartItems)}
  {ctx.cartState.items?.map((item)=>
          <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>1</td>
            <td><button onClick={()=>removeFromCart(item)}>Remove</button></td>
          </tr>
          )}
  </tbody>
          
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    )
}

export default CartComponent