import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
  const { _id,name, img, Description } = props.package;
    return (
        <div>
        <Col>
       <Card className="w-75 mx-auto">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {Description}
              </Card.Text>
              <Link to={`/singlepackage/${_id}`}>
              <button className='booking-btn'>Delete</button>
              </Link>
          </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default Package;