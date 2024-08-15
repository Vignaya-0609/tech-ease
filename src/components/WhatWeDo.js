import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import about from "../assets/img/about.png";
const contents = [
    {
        title: "Web Design",
        content: "At Techease, we create stunning, user-friendly websites that help your business stand out and attract customers. Our experienced team designs websites that are visually appealing, easy to navigate, highly responsive, and optimized for performance across all devices, ensuring seamless user experiences.",
        buttonText: "View More",
        imageSrc: about,
        imageAlt: "Web Design"
    },
    {
        title: "Search Engine Optimization",
        content: "At Techease, we understand the importance of visibility in driving online success. Our SEO experts use proven strategies to improve your website's ranking on search engines, ensuring it reaches your target audience effectively and generates quality leads.",
        buttonText: "Learn More",
        imageSrc: about,
        imageAlt: "SEO"
    },
    {
        title: "Affiliate Marketing",
        content: "At Techease, we leverage the power of affiliate marketing to boost your revenue and expand your reach. Our tailored affiliate programs connect your brand with a network of influential partners who promote your products or services to their audience.",
        buttonText: "Discover More",
        imageSrc: about,
        imageAlt: "Affiliate Marketing"
    }
];

function WhatWeDo() {
    return (
        <Container className='mt-5 mb-3' id="whatwedo">
            <div className='heading mb-5 pt-5'>
                <h2>What We Do</h2>
            </div>
            {contents.map((data, index) => (
                <Row key={index} className={`do-content ${index % 2 !== 0 ? 'reverse' : ''}`}>
                    <Col lg={6} md={12} className="our-content mb-2">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                        <Button variant='' style={{ backgroundColor: "orange", color: "black" }} className='mt-3 fw-semibold'>
                            {data.buttonText}
                        </Button>
                    </Col>
                    <Col lg={6} md={12} className="d-flex align-items-center justify-content-center mb-2">
                        <img src={data.imageSrc} alt={data.imageAlt} className='img-fluid img-center w-50 h-75' />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default WhatWeDo;
