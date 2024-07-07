import { useContext } from "react";
import img from "../assets/logo.jpg";
import CartContext from "../store/cartcontext";
import UserProgressContext from "../store/UserProgress";

export default function Header() {
    const cartCxt = useContext(CartContext);
    const userProgressCxt = useContext(UserProgressContext);

    const total = cartCxt.items.reduce( (sum, item) => {
        return sum+ item.quantity;
    }, 0 );
    
    function handleShowCart(){
      userProgressCxt.showCart();
    }

  return (
    <header id="main-header">
      <div id="title">
        <img src={img} alt="app image" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button onClick={handleShowCart}>Cart {total}</button>
      </nav>
    </header>
  );
}
