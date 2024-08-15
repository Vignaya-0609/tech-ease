import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import techAid from "../assets/img/techAid.png";
import secure from "../assets/img/secure.png";
import market from "../assets/img/market.png";
import credit from "../assets/img/credit.png";
import target from "../assets/img/target.png";
import insurance from "../assets/img/insurance.png";
import ecommerce from "../assets/img/ecommerce.png";
import office from "../assets/img/office.png";
const contents=[{
        name:"Technical Aid",
        img:techAid,
        alt:"Technical Aid"
    },
    {
        name:"Secure Access",
        img:secure,
        alt:"Secure Access"
    },
    {
        name:"Market Research",
        img:market,
        alt:"Market Research"
    },
    {
        name:"Credit",
        img:credit,
        alt:"Credit"
    },
    {
        name:"Targeting",
        img:target,
        alt:"Targeting"
    },
    {
        name:"Insurance",
        img:insurance,
        alt:"Insurance"
    },
    {
        name:"Ecommerce",
        img:ecommerce,
        alt:"Ecommerce"
    },
    {
        name:"Office",
        img:office,
        alt:"Office"
    },
    
]
function Projects() {
  return (
    <Container className='mt-5 mb-3' id="projects">
            <div className='heading mb-5 pt-5'>
                <h2>Our Projects</h2>
            </div>
            <Row xs={1} md={3} lg={4} className="g-4">
            {contents.map((data, idx) => (
            <Col key={idx}>
                <Card className='p-3 mb-3 text-center projects'>
                    <Col md={12}>
                    <img src={data.img} alt={data.alt} className='img-fluid fixed-height-img'></img>
                    </Col>
                    <Col md={12} className='mt-5'>
                    <h5>{data.name}</h5>
                    </Col>
                </Card>
            </Col>
            ))}
    </Row>
        </Container>
  )
}

export default Projects