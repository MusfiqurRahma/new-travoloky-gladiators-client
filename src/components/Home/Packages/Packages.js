import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data=>setPackages(data))
    },[])

    return (
        <div>
            <div>
            <h2 style={{fontWeight:'800'}}>TOP PLACES</h2>
            <h4 className="text-secondary">BEST TRAVEL PACKAGES</h4>
            </div>
            <div className="m-2 mx-5">
                <button className="country-btn"  style={{marginRight:'10px'}}>Bangladesh</button>
                <button className="country-btn" style={{marginRight:'10px'}}>United Kingdom</button>
                <button className="country-btn" style={{marginRight:'10px'}}>China</button>
                <button className="country-btn" style={{marginRight:'10px'}}>Switzerland</button>
                <button className="country-btn" style={{marginRight:'10px'}}>Norway</button>
                <button className="country-btn" style={{marginRight:'10px'}}>UAE</button>
                <button className="country-btn" style={{marginRight:'10px'}}>USA</button>
                <button className="country-btn" style={{ marginRight: '10px' }}>Turky</button>
            </div>
            <Row xs={1} md={3} className="g-3">
                {
                 packages.map(item=> <Package package={item}></Package>)   
              }
            </Row>
        </div>
    );
};

export default Packages;