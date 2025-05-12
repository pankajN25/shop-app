// import { useContext } from "react"
// import { ShopContext } from "../../App";
// function cartTotal(cart){
//     const itemPrices =cart.map(item=>item.price);
//     const totalPrice= itemPrices.reduce((total,price)=>total+price,0);
//     return totalPrice;
// }


// const ShoppingCart = () => {
//     const { cart, removeItemFromCart } = useContext(ShopContext)
//     return (
//         <div>
//             {cart.length === 0 && <div>
//                 <h1>Your Cart is Empty</h1>
//             </div>}
//             {cart.length!=0 &&
//             <>
//             <div>
//                 <h2>your Shopping Cart</h2>

//             </div>
//             <div className="d-flex justify-content-between border border-2 p-2 m-2">
//                 <h1>Total items:{cart.Length}</h1>
//                 <h2>cart total : &#8377;{cartTotal(cart)}</h2>
//             </div>
//             <div>
//                 {
//                     cart.map(item =>
//                     <div key={item.id} className="d-flex justify-content-between border border-2 p-2 m-2" key={item.id}>
//                     <div>
//                         <img src={item.img} alt={item.name} width={100} height={120}/>
//                     </div>
//                     <div>
//                        {item.brand}
//                     </div>
//                     <div>
//                         {item.name}
//                     </div>
//                     <div>
//                         {item.price}
//                     </div>
//                     <div>
//                         <button title="remove"onClick={()=>removeItemFromCart(item)} className="btn btn-danger">add symboll</button>
//                     </div>
//                     </div>

//                     )
//                 }
//             </div>
//             </>}
//         </div>

//     )
// }


// export default ShoppingCart
import { useContext } from "react"
import { ShopContext } from "../../App";

function cartTotal(cart) {
    const itemPrices = cart.map(item => item.price);
    const totalPrice = itemPrices.reduce((total, price) => total + price, 0);
    return totalPrice;
}

const ShoppingCart = () => {
    const { cart, removeItemFromCart } = useContext(ShopContext)
    return (
        <div>
            {cart.length === 0 && <div>
                <h1>Your Cart is Empty</h1>
            </div>}
            {cart.length !== 0 &&
                <>
                    <div>
                        <h2>Your Shopping Cart</h2>
                    </div>
                    <div className="d-flex justify-content-between border border-2 p-2 m-2">
                        <h1>Total items: {cart.length}</h1>
                        <h2>Cart total: &#8377;{cartTotal(cart)}</h2>
                    </div>
                    <div>
                        {cart.map(item =>
                            <div key={item.id} className="d-flex justify-content-between border border-2 p-2 m-2 align-items-center">
                                <div>
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        width={100} 
                                        height={120}
                                        style={{objectFit: 'cover'}} // Ensures image fits properly
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = 'path/to/placeholder/image.jpg'
                                        }} // Fallback if image fails to load
                                    />
                                </div>
                                <div>
                                    {item.brand}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    &#8377;{item.price}
                                </div>
                                <div>
                                    <button 
                                        title="Remove" 
                                        onClick={() => removeItemFromCart(item)} 
                                        className="btn btn-danger"
                                    >
                                        × {/* This is the multiplication symbol which looks like an X */}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>}
        </div>
    )
}

export default ShoppingCart