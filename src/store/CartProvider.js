import { useReducer,useState,useEffect } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const defaultCartState={
    items:[],
    totalAmount:0
}

const CartReducer=(state,action)=>{

    if(action.type=='add'){
        console.log("entered into fn")
        console.log(state)
        console.log(action)
        
        const updatedItems=state.items.concat(action.item)
        console.log(updatedItems)
        const updatedTotalAmount=state.totalAmount+action.item.price
        console.log(updatedTotalAmount)
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if(action.type=='remove'){
        const updatedItems=state.items.filter((element)=>{
            return element.title!=action.item.title
        })
        // state={...state,items:updatedItems}
        let updatedTotalAmount=state.totalAmount-action.item.price
        if(updatedTotalAmount<0){
            updatedTotalAmount=0
        }
        // state.totalAmount=state.totalAmount-action.item.price
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    
    return defaultCartState
}

const CartProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(CartReducer, defaultCartState)
    console.log(cartState)

    const initialToken=localStorage.getItem('token')
    const email=localStorage.getItem('email')
    const endpoint='cart'+email.split('@')[0]+'mailcom'
    console.log(endpoint)
    const [token,setToken]=useState(initialToken)

    useEffect(()=>{
        const fetch=async()=>{
            const response=await axios.get(`https://crudcrud.com/api/a4331abc138e43e19bb8b1b18dcd5e96/${endpoint}`)
            console.log(response)
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                console.log(element)
                dispatchCartAction({type:'add',item:element})
            }
          }
          fetch()
    },[])

    const isLoggedIn=!!token

    const loginHandler=(token)=>{
        // console.log("loginhandler")
        
        localStorage.setItem('token',token)
        setTimeout(()=>{
            console.log("settomeoutcalled")
            localStorage.clear('token')
        },300000)
        setToken(token)
    }
    
    const logOutHandler=()=>{
        localStorage.clear('token')
        setToken(null)
    }

const addItem=async(item)=>{
    console.log(item)
    const response=await axios.post(`https://crudcrud.com/api/a4331abc138e43e19bb8b1b18dcd5e96/${endpoint}`,item)
       console.log(response)

       
     dispatchCartAction({type:'add',item:item})
}

const removeItem=(item)=>{
    dispatchCartAction({type:'remove',item:item})
}

return(
    <CartContext.Provider value={{cartState,addItem,removeItem,token,isLoggedIn,loginHandler,logOutHandler}}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartProvider