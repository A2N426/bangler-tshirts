import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin>abeg</Cousin>
                <Cousin>bibek</Cousin>
            </section>
        </div>
    );
};

export default Uncle;