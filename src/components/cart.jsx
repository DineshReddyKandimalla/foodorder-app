import { useState, useEffect, useContext } from "react";

import CartContext from "../store/cartcontext";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgress";


export default function Cart() {

   const cartCxt = useContext(CartContext);
   const userProgressCxt = useContext(UserProgressContext);


   const cartTotal = cartCxt.items.reduce( (sum, item) =>  sum + item.quantity*item.price ,0 );

   function handleCloseCart(){
    userProgressCxt.hideCart();
   }

   function handleCheckOut(){
    userProgressCxt.showCheckout();
   }

  return (
    <Modal className="cart" open={userProgressCxt.progress === 'cart'} onClose={userProgressCxt.progress === 'cart' ? handleCloseCart :null} >
       <h2>Your cart</h2>
       <ul>
        {cartCxt.items.map( item => (
            <li key={item.id} className="cart-item"><p>{item.name}- {item.quantity}×${item.price}</p>
            <p className="cart-item-actions">
             <button onClick={()=>cartCxt.removeItem(item.id)}>-</button>
             <span>{item.quantity}</span>
             <button onClick={()=>cartCxt.addItem(item)}>+</button>
            </p>
            </li>
        ))}
       </ul>
       <p className="cart-total">${cartTotal}</p>
       <p className="modal-actions">
       <button onClick={handleCloseCart}>Close</button>
       {cartCxt.items.length >0 && <button onClick={handleCheckOut}>Go to Checkout</button>}
       </p>
    </Modal>
  );
}