import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
function Footer() {
  return (
    <Container fluid className='mt-5 footer'>
        <Row className='p-3'>
            <Col md={12} className='d-flex align-items-center justify-content-center'>
            <ListGroup horizontal>
                <ListGroup.Item className='list-items'>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <TiSocialYoutube size={24} />
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='list-items'> 
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <TiSocialLinkedin size={24} />
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='list-items'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook size={24} />
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='list-items'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <TiSocialInstagram size={24} />
                </a>
            </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col>
            <p className='text-center text-light mt-3'>Copyright &copy; 2024. All rights reserved</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer