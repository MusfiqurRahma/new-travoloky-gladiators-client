import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div style={{marginBottom:'50px'}}>
            <Container>
                <h2 style={{fontWeight:'800',marginTop:'40px'}}>WE ARE TRAVELOKY</h2> <hr className='line-title'/>
             <Row>
              <Col sm={12} md={6}>
                <h4 style={{marginTop:'70px'}}>About Traveloky</h4>
                        <p>Founded in 1996 in Dhaka, traveloky has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of Traveloky Holdings Inc. (NASDAQ: BKNG), Traveloky’s mission is to make it easier for everyone to experience the world.By investing in technology that takes the friction out of travel, Traveloky seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Traveloky enables properties around the world to reach a global audience and grow their businesses.</p>
                     <button className="travleoky-btn">Read More</button>       
                     <button className="travleoky-btn">Purchase Now</button>       
              </Col>
              <Col sm={12} md={6}>
              <img className='about-img' height='90%'style={{marginRight:'40%'}} src="https://media.istockphoto.com/photos/happy-guy-walking-with-mobile-phone-and-bag-picture-id507753728?k=20&m=507753728&s=612x612&w=0&h=Ty2gsizQXp83w8o-EyOrg1Jtfs9RsvOumNt39oRmoHM=" alt="" />
              </Col>
             </Row>
            </Container>
        </div>
    );
};

export default About;