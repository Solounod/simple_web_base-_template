import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function MyNavbar() {
    const navigate = useNavigate()

    const handleBrandClick = (route) => {
      navigate(route)
  }

    return (
      <header className="mx-0">
        <Navbar expand="lg" className="bg-body-tertiary p-3 header" >
          <Container>
            <Navbar.Brand onClick={() => handleBrandClick("/")}>Logo empresa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="ms-auto fw-bolder size-text-nav text-black">
                <Nav.Link className="text-black px-3  hover-nav" onClick={() => handleBrandClick("/")}>Home</Nav.Link>
                <Nav.Link className="text-black px-3  hover-nav" onClick={() => handleBrandClick("/aboutme")}>About me</Nav.Link>
                <Nav.Link className="text-black px-3  hover-nav" onClick={() => handleBrandClick("/service")}>Services</Nav.Link>
                <Nav.Link className="text-black px-3  hover-nav" onClick={() => handleBrandClick("/contact")}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
        
}