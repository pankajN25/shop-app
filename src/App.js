import './App.css';
import ShopRouter from './component/router/ShopRouter';
import { createContext , useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // this is important for dropdowns, modals, etc.

// create and export global contet obj
export const ShopContext = createContext();
// create global reducer function
function cartReducer(cart,action){
  switch(action.type){
    case "ADD TO CART":return [...cart,action.item];
    case "REMOVE FROM CART": return cart.filter(item=>item!=action.item);
  }
}
function App() {
  const [cart,setCart]=useReducer(cartReducer,[])
  // event handleres for shopping cart activity
  const addItemToCart= product=>{ setCart({type:"ADD TO CART",item:product});
  alert ("Item add4d to the cart successfullu");
}
  const removeItemFromCart=cartItem =>setCart({type:"REMOVE FROM CART",item:cartItem})
  return (
    <div className="App">
      
      <ShopContext.Provider value={{cart,addItemToCart,removeItemFromCart}}>
      <ShopRouter />
      </ShopContext.Provider>

      
    </div>
  );
}

export default App;
