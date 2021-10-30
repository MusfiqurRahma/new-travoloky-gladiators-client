import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
const Singlepackage = () => {

    const { orderId } = useParams()
    const [orders, setOrders] = useState({});
    useEffect(() => {
      fetch('http://localhost:5000/packages')
          .then(res => res.json())
          .then(data => {
              const matchedData =data.find(singleData =>singleData._id===orderId);
              setOrders(matchedData)
              console.log(matchedData);
          })
        },[orderId])
    return (
        <Row xs={1} md={1}>
  <Col>
    <Card className='w-25 m-auto mt-5 mb-5'>
      <Card.Img variant="top" src={orders?.img} />
      <Card.Body>
        <Card.Title>{orders?.name}</Card.Title>
        <Card.Text>
          {orders?.Description}
         </Card.Text>
         <Row>
          <Col><h4 style={{color:'green',fontWeight:'700'}}>${orders.price}</h4> </Col>                  
          <Col style={{ color:'#f7cd13'}}><i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>                               
        </Col>
         </Row>
        </Card.Body>
       <Button className='bg-secondary'>Order Now</Button>
    </Card>
  </Col>
</Row>
    );
};

export default Singlepackage;