import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="#home">Document Editor</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <NavDropdown title="Docs" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#docs.1">Docs.1</NavDropdown.Item>
                            <NavDropdown.Item href="#docs.2">
                                Docs.2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#docs.3">Docs.3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#docs.4">
                                Docs.4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#Log_in'>log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;