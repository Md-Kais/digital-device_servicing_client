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
                    <Nav.Link className='ml-3 navText text-secondary'  ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link className='ml-3 navText text-secondary' ><Link to="/about">About</Link></Nav.Link>
                    <Nav.Link className='ml-3 navText text-secondary'><Link to="/allservices">Services</Link></Nav.Link>

                    <Nav.Link className='ml-3 navText text-secondary'><Link to="/review">Review</Link></Nav.Link>
                    <NavDropdown title="Store" className='ml-3 navText text-secondary' id="basic-nav-dropdown">
                        <NavDropdown.Item className=' navText text-secondary'><Link to="/userOrderList">Orders</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" className=' navText text-secondary' >Contact</NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link className='ml-3 navText text-secondary'><Link to="/admin">Admin</Link></Nav.Link>
                    <Link to='/login' className="link-text"><Nav.Link className='ml-3 navText text-secondary'>
                        {
                            loggedInUser.isSignedIn
                                ?
                                <Image src={photoURL} roundedCircle height="50px" />

                                :
                                <p className='ml-3 navText text-secondary'> <Link to='/login' className="link-text">Login</Link> </p>




                        } </Nav.Link>
                   </Link>
                   


                </Nav>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default AppNavbar;
