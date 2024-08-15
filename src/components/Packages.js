import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
const contents=[{
        name:"Basic",
        sites:"5 web sites",
        mails:"15 e-mails",
        db:"5 MySQL databases",
        storage:"10 GB storage",
        price:"99/mo."
    },
    {
        name:"Standard",
        sites:"15 web sites",
        mails:"40 e-mails",
        db:"20 MySQL databases",
        storage:"50 GB storage",
        price:"249/mo."
    },
    {
        name:"Premium",
        sites:"30 web sites",
        mails:"50 e-mails",
        db:"40 MySQL databases",
        storage:"100 GB storage",
        price:"499/mo."
    },
    
]
function Packages() {
  return (
    <Container className='mt-5 mb-3' id="packages">
            <div className='heading mb-5 pt-5'>
                <h2>Our Packages</h2>
            </div>
            <Row xs={1} md={3} className="g-4">
            {contents.map((data, idx) => (
            <Col key={idx}>
                <Card className='card p-3 mb-3 text-center package'>
                    <h3>{data.name}</h3>
                    <p>{data.sites}</p>
                    <p>{data.mails}</p>
                    <p>{data.db}</p>
                    <p>{data.storage}</p>
                    <h4>&#8377;{data.price}</h4>
                    <Button variant='' style={{ backgroundColor: "orange", color: "black" }} className='mt-3 fw-semibold'>
                        Order Now
                    </Button>
                </Card>
            </Col>
            ))}
    </Row>
        </Container>
  )
}

export default Packages