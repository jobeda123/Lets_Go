import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar>
            <Navbar.Brand><img style={{width:"150px"}} src={logo} alt=""></img></Navbar.Brand>
            <Nav className="nav">
                <Nav.Link style={{color:"orange", fontWeight:"bold", fontSize:"22px", paddingRight:"30px"}} href="/home">Home</Nav.Link>
                <Nav.Link style={{color:"orange", fontWeight:"bold", fontSize:"22px", paddingRight:"30px"}} href="/destination">Destination</Nav.Link>
                <Nav.Link style={{color:"orange", fontWeight:"bold", fontSize:"22px", paddingRight:"30px"}} href="/blog">Blog</Nav.Link>
                <Nav.Link style={{color:"orange", fontWeight:"bold", fontSize:"22px", paddingRight:"30px"}} href="/contact">Contact</Nav.Link>
            </Nav>
                <Link to={"/login"}>
                    <Button className="logInBtn" style={{fontWeight:"bold"}} variant="primary">Log In</Button>
                </Link>
            </Navbar>
        </Container>
    );
};

export default Header;