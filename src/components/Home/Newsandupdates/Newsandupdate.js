import React from 'react';
import { Col,Row } from 'react-bootstrap';

const Newsandupdate = () => {
    return (
        <div>
            <h1 className="mt-5 p-5" style={{ fontWeight: '800' }}
            >News And Updates</h1><hr className='line-title' />
            <Row className="mt-5">
                <Col>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/HWRQk7ubBnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <h2 style={{ color: '#316ffe',fontWeight:'800' }}>DONT'T GIVE IN TO FEAR OR HOW TO  <br /> TRAVEL TO A PLACE YOU KNOW.</h2>
                    <div style={{display: 'flex', flexDirection: 'row',marginLeft:'30%',gap:'40px',marginTop:'20px'}}>
                    <h6><i class="far fa-calendar-alt"></i> july 25,2021</h6>
                        <h6><i class="fas fa-user-shield"></i> admin</h6>
                    </div>
                    <p>As interesting as visiting ancient ruins or iconic monuments can be,sometimes the most memorable landmarks can't be pinned on a map.Whether the strange buzz in the air hits is as invigorating or off-putting.There are a few,bold few cities that defy social norms and the powers that be by celebrating diversity,creativity,eccentricity.
                    </p>
                    <button className="travleoky-btn">Read More</button>
                </Col>
            </Row>
        </div>
    );
};

export default Newsandupdate;