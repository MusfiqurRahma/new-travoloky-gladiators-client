import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Are you sure want to add a new Package?')
                    reset();
                }
            })
    } 

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
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
            <div className='mt-4 mb-4'>
            <h4 style={{fontWeight:'700'}}>ADD PACKAGES</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 30 })} placeholder='Name'/>
            <input {...register("img")} placeholder='Image url'/>
            <input type="message" {...register("Description", { min: 18, max: 99 })} placeholder='Description'/>
            <input style={{backgroundColor:'#0bbdb7',border:'1px solid #0bbdb7',padding:'2px 5px',color:'white'}} type="submit" />
            </form>
            </div>
            <Row xs={1} md={3} className="g-3">
                {
                    packages.map(item => <Package package={item}
                    key={item._id}></Package>)
              }
            </Row>
        </div>
    );
};

export default Packages;