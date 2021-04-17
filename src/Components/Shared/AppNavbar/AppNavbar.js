import React, { useContext } from 'react';
import { Button, Form, Image, FormControl, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';
import './AppNavbar.css'
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
import { UserContext } from '../../../App';
const AppNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email, photoURL, displayName } = loggedInUser;
    return (

        <Navbar expand="lg" >
            <Navbar.Brand href="#home">Digital Device Servicing</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav " className="ml-auto" />
            <Navbar.Collapse id="basic-navbar-nav ">


                <Nav className="ml-auto ">
                    <Nav.Link className='ml-3 navText text-secondary' href="#home" ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link className='ml-3 navText text-secondary' href="#about">About</Nav.Link>
                    <Nav.Link className='ml-3 navText text-secondary' href="#dentalServices"><Link to="/addServices">Services</Link></Nav.Link>

                    <Nav.Link className='ml-3 navText text-secondary' href="#reviews">Reviews</Nav.Link>
                    <NavDropdown title="Store" className='ml-3 navText text-secondary' id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" className=' navText text-secondary'>Cart</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" className=' navText text-secondary' >Contact</NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link className='ml-3 navText text-secondary' href="blog">Blog</Nav.Link>

                    <Nav.Link className='ml-3 navText text-secondary' href="contact">  <Link to='/login' className="link-text">
                        {
                            loggedInUser.isSignedIn
                                ?
                                <Image src={photoURL} roundedCircle height="50px" />

                                :
                                <p className='ml-3 navText text-secondary'>Login </p>




                        }
                    </Link>
                    </Nav.Link>


                </Nav>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default AppNavbar;
