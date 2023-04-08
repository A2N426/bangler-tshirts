import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleToCart}) => {
    const {name,price,picture}=tshirt;
    return (
        <div className='item-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;