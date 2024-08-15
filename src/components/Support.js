import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import support from "../assets/img/support.jpg";
import Button from 'react-bootstrap/esm/Button';
function Support() {
  return (
    <Container className='mt-5 mb-3' id="support">
            <div className='heading mb-5 pt-5'>
                <h2>Updates & Support</h2>
            </div>
            <Row>
                <Col lg={6} md={12} style={{textAlign:"justify"}} className='mb-3'>
                <p>Stay current with TechEase's regular updates, ensuring your app remains cutting-edge.</p>
                <p>Our dedicated support team is available 24/7 to address any issues, provide guidance, and implement improvements, ensuring optimal performance and seamless user experiences as your app evolves with the latest technology.</p>
                <p>At Techease, we understand that technology is ever-changing, and keeping up can be challenging. That's why we monitor trends and standards to integrate the latest features into your app efficiently.</p>
                <Button variant='' style={{ backgroundColor: "orange", color: "black" }} className='mt-3 fw-semibold'>
                        Support Center
                </Button>
                </Col>
                <Col lg={6} md={12} className='d-flex align-items-center justify-content-center mb-3'>
                    <img src={support} alt="support" className='img-fluid img-center'></img>
                </Col>
            </Row>
    </Container>
  )
}

export default Support