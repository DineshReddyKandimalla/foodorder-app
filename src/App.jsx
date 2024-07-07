import { useEffect } from "react";
import Header from "./components/header";
import Meals from "./components/meals"; 
import { CartContextProvider } from "./store/cartcontext";
import Cart from "./components/cart";
import {UserProgressContextProvider} from "./store/UserProgress";
import Checkout from "./components/checkout";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
