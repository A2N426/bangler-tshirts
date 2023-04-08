import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <p>Spcial:{angti}</p>
        </div>
    );
};

export default Special;