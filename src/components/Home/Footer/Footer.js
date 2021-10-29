import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../../Image/logo/logo-1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{background:'#0a1735',padding:'15px'}} className="footer-container">
        <Container>
        <Row>
            <Col>
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
             <Col className="text-white explore">
                <h2>Explore</h2> <hr />
                <p>Tour Singapore City</p>        
                <p>Tour Manila City</p>        
                <p>Tour New York City</p>        
                <p>Tour Sanghai City</p>        
                <p>Tour Hongkong City</p>        
                <p>Tour HaNoi City</p>        
                <p>Tour Tokyo City</p>        
            </Col>
             <Col className="text-white">
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
            <Col>
            <h2 className="text-white">Galleries</h2> <hr className="text-white"/>
            <Row xs={1} md={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/male-tourist-backpack-waving-his-hand-isolated-white-background-35845466.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/07/shutterstock_587590211.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://www.shemazing.net/wp-content/uploads/2021/09/1631019829_pexels-photo-1371360.jpeg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://www.thrillophilia.com/blog/wp-content/uploads/2019/04/thailand-as-my-first-international-solo-woman-trip-1.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://b4i.travel/wp-content/uploads/2019/12/1-4.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://www.langleyadvancetimes.com/wp-content/uploads/2021/06/25476455_web1_210611-ALT-RU-Tacky-Tourists-tourists_1.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://previews.123rf.com/images/puhhha/puhhha1712/puhhha171200149/91086717-lovely-tourist-couple-taking-photos-on-phone-on-street-portrait-of-young-smiling-woman-and-man-takin.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://st.depositphotos.com/1158045/5035/i/950/depositphotos_50353549-stock-photo-tourists-taking-picture.jpg" />
      </Card>
      </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://previews.123rf.com/images/michaeljung/michaeljung1407/michaeljung140700107/29700952-happy-tourist-taking-pictures-at-the-harbour-with-a-digital-camera.jpg" />
      </Card>
      </Col>
     </Row>          
           </Col>
         </Row>
        </Container>
        </div>
    );
};

export default Footer;