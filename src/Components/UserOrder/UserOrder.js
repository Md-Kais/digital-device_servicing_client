import React, { useContext, useEffect, useState } from 'react';

import { TechnicianContext, UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserOrderCardDesign from '../UserOrderCardDesign/UserOrderCardDesign';
const UserOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isTechnician, setIsTechnician] = useContext(TechnicianContext);
    const [userOrder, setUserOrder] = useState(null);
    console.log(loggedInUser.email);
    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/userOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, []);
    if (isTechnician === true) {
        alert('You are an admin and Technician . Please Check Admin Page to View Your Order and Status of your work')
    }


    console.log(userOrder);
    return (
        <>
            <Sidebar></Sidebar>
            <section className="container-fluid row">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-center  text-primary mb-5">User Order</h5>
                        {

                            userOrder && userOrder.map(order =>

                                <UserOrderCardDesign order={order}>

                                </UserOrderCardDesign>


                            )
                        }
                    </div>


               
            </section>
        </>
    );
};

export default UserOrder;