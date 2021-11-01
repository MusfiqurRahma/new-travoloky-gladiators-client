import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
  const { _id,name, img, Description,price,time } = props.package;
    return (
        <div>
        <Col>
       <Card className="w-75 mx-auto" style={{backgroundColor:'whitesmoke'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {Description}
              </Card.Text>
              <Row className='price-time-container'>
                <Col><h5>{price}$</h5></Col>
                <Col><h5>{time}</h5></Col>
              </Row>
              <Link to={`/singlepackage/${_id}`}>
              <button className='booking-btn'>Book Now</button>
              </Link>
          </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default Package;