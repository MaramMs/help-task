'use client'
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/navbar.css'
function NavbarCustom() {
  return (
<Navbar collapseOnSelect expand="lg" className='py-[44px]'>
      <Container>
        <Navbar.Brand href="/">
          <img src='/images/logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" list">
            <Nav.Link href="#features" className='item active'>Help Center</Nav.Link>
            <Nav.Link href="#pricing" className='item'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='item'>video guides</Nav.Link>
          
          </Nav>
          <Nav className='nav-right flex  gap-[24px]'>
        
         <NavDropdown
      title={
        <div className="d-flex align-items-center">
          <img
            src="/images/flag.png"
            alt="English"
            style={{ width: 20, marginRight: 8 }}
          />
          <span>English</span>
        </div>
      }
      id="collapsible-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">
        <div className="d-flex align-items-center">
          <img
            src="https://flagcdn.com/w40/ae.png"
            alt="Arabic"
            style={{ width: 20, marginRight: 8 }}
          />
          <span>Arabic</span>
        </div>
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        <div className="d-flex align-items-center">
          <img
            src="/images/flag.png"
            alt="English"
            style={{ width: 20, marginRight: 8 }}
          />
          <span>English</span>
        </div>
      </NavDropdown.Item>
    </NavDropdown>
        <div className='flex justify-between'>
        <Button className='login'>
            Log In
            </Button>
            <Button className='signup'>
            Get Started 
            </Button>
        </div>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom
