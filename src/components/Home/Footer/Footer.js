import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../../Image/logo/logo-1.png';
import './Footer.css';

const Footer = () => {
    return (
       <> <div style={{background:'#0a1735',padding:'15px'}} className="footer-container">
        <Container>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <img src={logo2} alt="" />
                        <p className="text-white">Find A Corporate Travel Management Solution With Your Own Dedicated Account Manager.Track your spend. Business Travel Made Easy.</p>
                        <h5 style={{ color: 'white', fontWeight: '600' }}><i className="fas fa-phone-alt"></i> +8801700000000</h5>
                        <div>
                        <i className="fab fa-facebook facebook"></i>
                        <i className="fab fa-twitter twitter"></i>
                        <i className="fab fa-instagram instagram"></i>
                        <i className="fab fa-whatsapp whatsapp"></i>
                        <i className="fab fa-pinterest pinterest"></i>
                        </div>
            </Col>
             <Col className="text-white explore" xs={12} md={4} lg={4}>
                <h2>Explore</h2> <hr />
                <p>Tour Singapore City</p>        
                <p>Tour Manila City</p>        
                <p>Tour New York City</p>        
                <p>Tour Sanghai City</p>        
                <p>Tour Hongkong City</p>        
                <p>Tour HaNoi City</p>        
                <p>Tour Tokyo City</p>        
            </Col>
             <Col className="text-white" xs={12} md={4} lg={4}>
                <h2>From The Blog</h2> <hr />
                <div className="blog">
                <img src="https://s3.envato.com/files/306481478/IMG_5032.jpg" alt="" />
                  <p> An Open Letter to Travoloky Gladiators</p>
                 <p>Jan 22,2020</p><hr />
                 <img src="https://ak.picdn.net/offset/photos/5fc966d46f52af4409e534e2/medium/offset_1050600.jpg" alt="" />
                  <p>An Open Letter to Travoloky Gladiators</p>
                  <p>Feb 22,2021</p>
                </div>
            </Col>           
         </Row>
        </Container>
      </div>
        <p className='text-white bg-secondary'>All rights reserved @2021,Musfiqur Rahman</p>
      </>
    );
};

export default Footer;