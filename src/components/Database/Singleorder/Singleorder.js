import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Singleorder = ({ myOrder }) => {
    const [packages, setPackages] = useState([]);
    const { order_id, status } = myOrder;

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data=>setPackages(data))
    })
    if (!packages) {
        <Spinner  animation='border' variant='dark'></Spinner>
    }
    const myPackage = packages.find(pack => pack._id === order_id);

    let name, price;

    if (myPackage) {
        ({ name, price } = myPackage);
    }

    return (
        <div>
            <p>Package Name:{name}</p>
            <p>Price:{price}</p>
            <p>status: {status}</p>
        </div>
    );
};

export default Singleorder;