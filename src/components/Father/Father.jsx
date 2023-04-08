import React from 'react';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section>
                <Myself ring={ring}></Myself>
            </section>
        </div>
    );
};

export default Father;