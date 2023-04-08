import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext()
export const Money = createContext(0)

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <h3>Grandpa Mone: {money}</h3>
            <Money.Provider value={[money,setMoney]}>
                <RingContext.Provider value='golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;