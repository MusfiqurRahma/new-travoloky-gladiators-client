import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Singlemanageorder = ({manageOrder}) => {
    const handleDelete = id => {
        const url = `https://grim-zombie-49480.herokuapp.com/myorder/${id}`
        fetch(url, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                   
                }               
            })
    }

    return (
        <div>
        <Table striped bordered hover>
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Delete</th>
      <th>Status</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     <td>{manageOrder.name}</td>
     <td>{manageOrder.email}</td>
      <td>{manageOrder.mobile}</td>
      <td>{manageOrder.address}</td>
      <td onClick={()=>handleDelete(manageOrder._id)}><i className="fas fa-trash-alt text-danger"></i></td>
      <td><Button>Pending</Button></td>
    </tr>  
  </tbody>
</Table>
        </div>
    );
};

export default Singlemanageorder;