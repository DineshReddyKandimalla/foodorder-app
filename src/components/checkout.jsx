import { useContext } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/input";
import CartContext from "../store/cartcontext";
import UserProgressContext from "../store/UserProgress";
import { jsxs } from "react/jsx-runtime";

export default function Checkout(){
      
    const cartCxt = useContext(CartContext);
    const userProgressCxt = useContext(UserProgressContext);

    const cartTotal = cartCxt.items.reduce( (sum, item) =>  sum + item.quantity*item.price ,0 );

    function handleClose(){
        userProgressCxt.hideCheckout();
    }

    function handleSubmit(event){
    event.preventDefault();

    const fd =new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            orders:{
                items: cartCxt.items,
                customer: customerData 
            }
        })
        
    });
    }
    
    return (
        <Modal open={userProgressCxt.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>checkout</h2>
                <p>total amount: </p>
                <Input label='Full Name' type='text' id='full-name'/>
                <Input label='E-Mail Address' type='email' id='email'/>
                <Input label='Street' type='text' id='street'/>
<div className="control-row">
<Input label='Postal Code' type='text' id='postal-code'/>
<Input label='City' type='text' id='city'/>
</div>
<p className="modal-actions">
    <button type='button' textOnly onClick={handleClose}>close</button>
    <button >Submit Order</button>
</p>
            </form>
        </Modal>
    );
}