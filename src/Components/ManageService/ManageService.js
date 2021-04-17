
import React, { useEffect, useState } from 'react';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
const ManageServices = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <section className="services">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our services</h5>
                <div className="row">
                    {
                        services.map(service => <ManageServiceCard key={service._id} service={service} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default ManageServices;