import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { TechnicianContext, UserContext } from '../../App';
import AdminOrderListDesign from '../AdminOrderListDesign/AdminOrderListDesign';
import Sidebar from '../Sidebar/Sidebar';
import './AdminOrderList.css'
const AdminOrderList = () => {
    const [status, setStatus] = useState(null)
    console.log(status);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isTechnician, setIsTechnician] = useContext(TechnicianContext);
    const [userOrders, setUserOrders] = useState([]);
    console.log(loggedInUser.email);

    useEffect(() => {

        fetch('https://polar-retreat-16445.herokuapp.com/adminOrder')
            .then(res => res.json())
            .then(data => setUserOrders(data));

    }, []);
    const { email } = loggedInUser;
    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/isTechnician', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                'email': email,


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
    }
    );
    console.log(isTechnician);



    console.log(userOrders);
    return (
        <>
        <Sidebar></Sidebar>
            <section className="container-fluid row ">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <div className="container text-danger" style={!isTechnician ? { display: 'block' } : { display: 'none' }}>
                        YOU ARE NOT ADMIN OR TECHNICIAN. SORRY SIR.
            </div>
                    <div className="container " style={isTechnician ? { display: 'block' } : { display: 'none' }}>

                        <div className="row ">
                           

                                {userOrders.map(order => <AdminOrderListDesign key={order._id} order={order} />)}





                          
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default AdminOrderList;