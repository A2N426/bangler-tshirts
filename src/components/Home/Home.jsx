import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData()
    const [cart,setCart]=useState([]);
    const handleToCart=tshirts=>{
        const exists = cart.find(ts=>ts._id===tshirts._id);
        if(exists){
            toast('This product Already added!!!')
        }
        else{
            const newCart=[...cart,tshirts]
            setCart(newCart);
        }
    }
    const handleRemoveFromCart=id=>{
        const remaining=cart.filter(ts=>ts._id!==id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
            {
                tshirts.map(tshirt=><TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleToCart={handleToCart}
                ></TShirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart
                key={cart._id}
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;