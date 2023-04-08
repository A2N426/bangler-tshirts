import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { Money } from '../GrandPa/Grandpa';

const Aunty = ({ring}) => {
    const [money,seMoney]=useContext(Money)
    return (
        <div>
            <h2>Aunty</h2>
            <button onClick={()=>seMoney(money + 1000)}>Send money</button>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;