import { useSelector } from "react-redux"
import React, { use, useEffect } from "react"
import { useDispatch } from "react-redux"
import { removeItem } from "./redux/slice.js"
import { useNavigate } from "react-router-dom"
import { clearAllItems } from "./redux/slice.js"

export function CartList() {
  const cartSelector=useSelector((state)=>state.cart.items);
 const [cartItems, setCartItems]=React.useState(cartSelector);

useEffect(()=>{
  setCartItems(cartSelector)

},[cartSelector]);

 const dispatch=useDispatch();
 const navigate=useNavigate();
 const manageQuantity=(id, q)=>{
    let quantity=parseInt(q) >1 ? parseInt(q) :1;
    const cartTempItems=cartSelector.map((item)=>{
      return item.id == id ?{...item,quantity } : item });
      setCartItems(cartTempItems);
    
   
 }
const handlePlaceOrder=()=>{
  localStorage.clear();
  dispatch(clearAllItems());
  alert("Order Placed Successfully");
  navigate("/");
}
 
 
 
 
return <> 
<div className="cart-container">
  <div className="cart-header">
 <h2>Your Cart Items</h2>
 <span>{cartItems.length} items</span>
  </div>
  {cartItems.length > 0 ? (
    cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="item-info">
          <img src={item.thumbnail}/>
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>{item.brand}</p>
          </div>

        </div>
        <div className="items-actions">
       <div style={{display:"flex",gap:"10px"}}>
        <input onChange={(e)=>manageQuantity(item.id,e.target.value)}
        value={item.quantity ? item.quantity :1}
        style={{margin:'15px', width:"90px"}} type="number" placeholder="Enter Quantity"/>
        <div>
           <span className="price">{item.quantity? (item.price*item.quantity).toFixed(2) : item.price.toFixed(2)}</span>
          <button onClick={()=>dispatch(removeItem(item))} className="btn">Remove</button>
        </div>
       </div>
          </div>  
        </div>
    ))
  ) :null
  }
<div className="cart-footer">
  Total : ${(cartItems.reduce((sum, item) => sum + (item.quantity ? item.price * item.quantity : item.price), 0).toFixed(2))}
</div>

<div>
  <button onClick={handlePlaceOrder} className="btn">
    Place Order
  </button>
</div>
</div>
  
  </>
}