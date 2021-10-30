import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data));
    },[])
    return (
        <div>
            <h2 style={{ fontWeight: '800' }}>RECOMMENDED HOTELS</h2> <hr className='line-title' />
            <div class="row row-cols-1 row-cols-md-4">
              {
              hotels.map(hotel=> <Hotel hotel={hotel}></Hotel> )
               }
            </div>
       </div>
    );
};

export default Hotels;


