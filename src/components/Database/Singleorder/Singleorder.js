import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Singleorder = ({ myOrder }) => {

    const handleDelete = id => {
        const url = `https://grim-zombie-49480.herokuapp.com/myorder/${id}`
        fetch(url, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                   
                }    
            })
    }

    return (
    <div>          
    <Col>
      <Card style={{ width: '18rem',boxShadow:'0 2px 2px 4px',backgroundColor:'grey',color:'white'}}>
        <Card.Img variant="top" src={myOrder?.package_details?.img} />
        <Card.Body>
        <Card.Title>{myOrder?.package_details?.name}</Card.Title>
        <hr />
          <Card.Text>
          {myOrder?.package_details?.Description}
          </Card.Text>
            <Row>
             <Col><h5 className='fw-bold text-info'>{myOrder?.package_details?.price}$</h5></Col>
            <Col> <h5>{myOrder?.package_details?.time}</h5> </Col>
           </Row>
          <Button className='bg-danger m-4' onClick={()=>handleDelete(myOrder?._id)}>Delete</Button>
          <Button className='bg-success'>Approved</Button>
        </Card.Body>       
      </Card>
    </Col>
    </div>
    );
};
export default Singleorder;