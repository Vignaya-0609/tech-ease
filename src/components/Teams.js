import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userMale from "../assets/img/user-male.png";
import userFemale from "../assets/img/user-female.png";
const contents=[{
        name:"Ashley Cole",
        role:"Management",
        img:userMale,
        alt:"user"
    },
    {
        name:"Sophie",
        role:"UI/UX Designer",
        img:userFemale,
        alt:"user"
    },
    {
        name:"Ed",
        role:"Developer",
        img:userMale,
        alt:"user"
    },
    {
        name:"Agatha",
        role:"Marketer",
        img:userFemale,
        alt:"user"
    }
    
]
function Teams() {
  return (
    <Container fluid className='mt-5 mb-3 bg' id="teams">
            <div className='heading mb-5 pt-5'>
                <h2>Our Teams</h2>
            </div>
            <Container>
                <Row>
                    {contents.map((data,index)=>(
                        <Col md={3} xs={12} key={index} className="d-flex flex-column align-items-center mb-5">
                            <img src={data.img} alt={data.alt} className="img-fluid img-center mb-3" />
                            <h6 className="text-center">{data.name}</h6>
                            <p className="text-center">{data.role}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
    </Container>
  )
}

export default Teams