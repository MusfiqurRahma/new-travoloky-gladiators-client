import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Singleorder from '../Singleorder/Singleorder';



const Myorder = () => {
    const { user } = useAuth();
    const [bookedPackages, setBookedPackages] = useState([])


    useEffect(() => {
        fetch('https://grim-zombie-49480.herokuapp.com/myorder')
            .then(res => res.json())
            .then(data =>setBookedPackages(data));
    }, [])

    const myOrders = bookedPackages.filter(pack => user.email === pack.email);
    return (
        <div>
            <h2 style={{borderBottom:'4px solid #61a1d9',marginBottom:'60px',fontWeight:'800',color:'#0a1735'}} className='mb-5 mt-5'>Your Ordered List</h2>         
          <Row xs={1} md={4} className='g-4'>
              {
               myOrders.map(myOrder => <Singleorder
               key={myOrder._id}
               myOrder={myOrder}>
                  </Singleorder>)
               }
          </Row>
          </div>
    );
};

export default Myorder;


