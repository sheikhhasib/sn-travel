import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
const LoginHeader = () => {
    return (
        <>
             <Navbar expand="lg" style={{margin: '0% 9%'}} fixed="top">
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Nav.Link className="mx-4 text-dark"> <strong>News</strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong>Destination</strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong>Blog</strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong>Contact</strong></Nav.Link>
                        <Button style={{backgroundColor:'#F9A51A',color:'black'}} className="px-5 mx-5"><strong>Login</strong></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </>
    );
};

export default LoginHeader;