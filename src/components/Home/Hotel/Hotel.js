import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Hotel = (props) => {
  const { img,name,description,price,star }= props.hotel;
    return (
      <div className="col">
    <div className="card m-auto">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.slice(0,200)}</p>
            <Row style={{border:'1px solid gray',height:'30px',backgroundColor:'#0a1735',color:'white'}}>
              <Col>
                 <h5>${price}</h5>
              </Col>
              <Col>
                 <h5>*{star}</h5>
              </Col>
            </Row>
      </div>
    </div>
  </div>
    );
};

export default Hotel;