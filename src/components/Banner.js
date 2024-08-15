import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from "../assets/img/banner.png";
import Button from 'react-bootstrap/Button';
import { IoIosArrowDown } from "react-icons/io";
function Banner() {
  return (
    <Container fluid className='bg banner'>
        <Container className='content'>
            <Row>
                <Col lg={7} md={12} className='intro'>
                    <h1>TechEase App Development</h1>
                    <p>Our mission is to bridge the gap between complex technology and user-friendly solutions. We believe that technology should be accessible to everyone, regardless of their technical background.</p>
                    <p>With a team of experienced developers, designers, and strategists, TechEase is committed to delivering high-quality apps that combine aesthetic appeal with powerful functionality.</p>
                    <Button variant='' style={{backgroundColor:"black",color:"white"}} className='mt-3'>View More <IoIosArrowDown/></Button>
                </Col>
                <Col lg={5} md={12} className='img-content'>
                    <img src={banner} alt="banner" className='img-fluid'></img>
                </Col>
            </Row>
        </Container>
        
    </Container>
  )
}

export default Banner