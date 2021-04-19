import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faComment, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { TechnicianContext, UserContext } from '../../App';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isTechnician, setIsTechnician] = useContext(TechnicianContext);
 

    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/isTechnician', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: loggedInUser.email

            })
        })
            .then(res => res.json())
            .then(success => {
                console.log(success);
                if (success) {

                    setIsTechnician(true);
                    console.log(isTechnician);
                 
                }
            })
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" ,width:'20vw' }}>
            <ul className="list-unstyled">
                {!isTechnician && <div>    <li>
                    <Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faCreditCard} /> <span>Book</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/userOrderList" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>User Order</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faComment} /> <span>Add Review</span>
                        </Link>
                    </li>
             </div>}
            
              
                {isTechnician && <div>
                    <li>
                        <Link to="/adminOrders" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>All Orders</span>
                        </Link>
                    </li>
                    
             
                    <li>
                        <Link to="/addTechnicians" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Technician</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addServices" className="text-white" >
                            <FontAwesomeIcon icon={faServicestack} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    
                </div>}
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/login" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;