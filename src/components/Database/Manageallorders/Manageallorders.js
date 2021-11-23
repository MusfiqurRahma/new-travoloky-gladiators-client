import React, { useEffect, useState } from 'react';
import Singlemanageorder from '../Singlemanageorder/Singlemanageorder';

const Manageallorders = () => {

  const [manageOrders, setManageOrders] = useState([]);
   
  const url = 'https://grim-zombie-49480.herokuapp.com/allorder';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data=>setManageOrders(data))
  },[])
  
    return (
      <div className='p-5'>
        <h2 style={{borderBottom:'4px solid #61a1d9',marginBottom:'60px',fontWeight:'800',color:'#0a1735'}}>Customers Order</h2>
        {
          manageOrders.map(manageOrder => <Singlemanageorder manageOrder={manageOrder}
            key={manageOrder._id}>
          </Singlemanageorder>)
          }
        </div>
    );
};

export default Manageallorders;

