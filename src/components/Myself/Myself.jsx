import React, { useContext } from 'react';
import Special from '../Special/Special';
import { Money } from '../GrandPa/Grandpa';

const Myself = ({ring}) => {
    const [money]=useContext(Money)
    return (
        <div>
            <h2>myself</h2>
            <h3>grandpa Money: {money}</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;