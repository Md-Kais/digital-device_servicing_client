
import React, { useEffect, useState } from 'react';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import Sidebar from '../Sidebar/Sidebar';
const ManageServices = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <>
            <Sidebar></Sidebar>

            <section className="container-fluid row">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-center  text-primary mb-5">Manage services</h5>
                    <div className="row">
                        {
                            services.map(service => <ManageServiceCard key={service._id} service={service} />)
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageServices;