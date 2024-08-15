import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GrTechnology } from "react-icons/gr";
function NavBar() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg" className="bg" id="home">
      <Container fluid>
          <Navbar.Brand href="#home" className='fw-bold'>
            <GrTechnology />{' '}
            TechEase
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className='fw-semibold'>
                    <Nav.Link onClick={()=>scrollToElement("home")}>Home</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("whatwedo")}>What We Do</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("features")}>Features</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("packages")}>Packages</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("projects")}>Projects</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("teams")}>Teams</Nav.Link>
                    <Nav.Link onClick={()=>scrollToElement("support")}>Support</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;