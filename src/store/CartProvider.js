import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
    totalAmount:0
}

const CartReducer=(state,action)=>{

    if(action.type=='add'){
        console.log("entered into fn")
        console.log(state)
        console.log(action)
        // state.items.push(action.item)
        // state.totalAmount=state.totalAmount+action.item.price
        // console.log(state)
        // return state
        
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

const addItem=(item)=>{
    console.log(item)
    dispatchCartAction({type:'add',item:item})
}

const removeItem=(item)=>{
    dispatchCartAction({type:'remove',item:item})
}

return(
    <CartContext.Provider value={{cartState,addItem,removeItem}}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartProvider