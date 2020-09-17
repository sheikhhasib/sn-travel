import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <Navbar expand="lg" style={{margin: '0% 9%'}} fixed="top">
                <Navbar.Brand ><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline style={{width:'35%',marginLeft:'5%',color:'#fff'}}>
                        <FontAwesomeIcon style={{position: 'absolute',marginLeft:'10px'}} icon={faSearch} />
                        <FormControl type="text"  style={{paddingLeft:'35px',width:'100%', backgroundColor:'rgba(255, 255, 255, 0.2)',color:'white'}} placeholder="Search your destiny" className="mr-sm-2"/>
                    </Form>
                    <Nav className="ml-auto">
                    <Link to="/news" className="text-decoration-none">
                    <Nav.Link  className="mx-4 text-light"><strong>News</strong></Nav.Link>
                    </Link>
                    <Link to="/destination" className="text-decoration-none">
                    <Nav.Link  className="mx-4 text-light"><strong>Destination</strong></Nav.Link>
                    </Link>
                    <Link to="/blog" className="text-decoration-none"><Nav.Link  className="mx-4 text-light"><strong>Blog</strong></Nav.Link></Link>
                    <Link to="/contact" className="text-decoration-none"><Nav.Link  className="mx-4 text-light"><strong>Contact</strong></Nav.Link></Link>
                    <Link to="/login" className="text-decoration-none">
                    <Button style={{backgroundColor:'#F9A51A',color:'black'}} className="px-5 mx-5 text-dark"><strong>Login</strong></Button>
                    </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;