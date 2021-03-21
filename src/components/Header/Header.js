import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log("I am now changing...",loggedInUser);
    return (
        <Container className="header">
            <img style={{width:"150px"}} src={logo} alt=""></img>
            <nav className="navBar">
                <Link className="nav" to="/home">Home</Link>
                <Link className="nav" to="/destination">Destination</Link>
                <Link className="nav" to="/blog">Blog</Link>
                <Link className="nav" to="/contact">Contact</Link>
            </nav>
                { !loggedInUser.success? 
                    <Link to={"/login"}>
                        <Button className="logInBtn" style={{fontWeight:"bold"}} variant="primary">Log In</Button>
                    </Link>
                    : <h4 className="nameDesign">{loggedInUser.name}</h4>
                }
                <Button onClick={() => setLoggedInUser({})} className="logInBtn" style={{fontWeight:"bold", width:"90px", height:"40px"}} variant="primary">Log Out</Button>
                
        </Container>
    );
};

export default Header;

// style={{color:"orange", fontWeight:"bold", fontSize:"22px", paddingRight:"30px"}}