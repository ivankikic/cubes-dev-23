import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='fw-bolder fs-3' href="#home">Cubes<span className='linear-gradient'>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='fw-bold'>
                        <Nav.Link className='text-body' href="#">About</Nav.Link>
                        <Nav.Link className='text-body' href="#">Services</Nav.Link>
                        <Nav.Link className='text-body' href="#">Projects</Nav.Link>
                        <Nav.Link className='text-body' href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
