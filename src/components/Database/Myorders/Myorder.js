import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Singleorder from '../Singleorder/Singleorder';


const Myorder = () => {
    const [bookedPackages, setBookedPackages] = useState([])

    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => setBookedPackages(data));
    }, [])
    if (!bookedPackages) {
        <Spinner  animation='border' variant='dark'></Spinner>
    }
    const myOrders = bookedPackages.filter(pack => user.email === pack.email);
    console.log(myOrders);
    return (
        <div>
            <h2 className='mb-2 mt-5'>Here is your Ordered List.</h2>
            {
                !bookedPackages.length ? (
                    <div style={{ height: '50vh' }}>
                        <p className='fs-5 fw-bold'>Loading! Please wait...</p>
                        <Spinner  animation='border' variant='dark'></Spinner>
                    </div>
                ) : (
                        <div className='booked-container container p-5'>
                            {
                                myOrders.map(myOrder => <Singleorder
                                    key={myOrder._id}
                                myOrder={myOrder}></Singleorder>)
                            }
                        </div>
                )
            }
        </div>
    );
};

export default Myorder;