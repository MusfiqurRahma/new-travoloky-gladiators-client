import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setHotels(data));
    },[])
    return (
        <div>
            <h2 style={{ fontWeight: '800' }}>RECOMMENDED HOTELS</h2> <hr className='line-title' />
            <Row xs={1} md={2} className="g-5 mx-auto">
            {
           hotels.map(hotel=> <Hotel hotel={hotel}></Hotel> )
            }
            </Row>
       </div>
    );
};

export default Hotels;