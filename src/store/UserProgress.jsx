import { createContext, useState } from "react";

const UserProgressContext = createContext({
 progress : '',
 showCart: () => {},
 hideCart: () => {},
 showCheckout: () => {},
  hideCheckout: () => {},
});

export  function UserProgressContextProvider({children}){

    const [userProgress, setProgress] = useState('');

    function showCart(){
        setProgress('cart');
    }
    function hideCart(){
        setProgress('');
    }
    function showCheckout(){
        setProgress('checkout');
    }
    function hideCheckout(){
        setProgress('');
    }

    const userProgressCxt={
        progress : userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

return (<UserProgressContext.Provider value={userProgressCxt}>{children}</UserProgressContext.Provider>);
}

export default UserProgressContext;