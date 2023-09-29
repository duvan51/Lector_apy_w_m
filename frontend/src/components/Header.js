import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  return (

       <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav.Link href="/wocomerce">wocomerce</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Home
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/wocomerce">
                  Wocommerce
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/mercadolibre">
                  Mercadolibre
                </NavDropdown.Item>
        
        </NavDropdown>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  )
  }  
export default Header
