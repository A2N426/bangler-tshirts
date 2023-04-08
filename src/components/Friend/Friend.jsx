import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>friend</h2>
            <p><small>{ring&&<p>ring:{ring}</p>}</small></p>
        </div>
    );
};

export default Friend;