import React from 'react';

const price = (props) => {

    return (
        <p>Price : <strong>{props.price.toFixed(2)} £ </strong></p>
    );
}

export default price;