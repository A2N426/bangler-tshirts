import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message = <h3>Fokira</h3>
    }
    else{
        message = <div>
            <h5>aro kino</h5>
            <p className={`bold ${cart.length > 0? 'skyblue':'red'}`}>thanks for buying us!!!</p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length > 0 ? 'skyblue':'red'}>Order summary: {cart.length}</h3>
            {message}
            {
                cart.length===2 ? <p>double product</p>:<p>not equal</p>
            }
            {
                cart.map(ts=><p>
                    {ts.name}
                    <button 
                    onClick={()=>handleRemoveFromCart(ts._id)}
                    >X</button></p>)
            }
            {
                cart.length === 4 || <p>it's not from fourth</p>
            }
            {
                cart.length===3 && <p>it's from ternary</p>
            }
        </div>
    );
};

export default Cart;