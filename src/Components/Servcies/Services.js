
import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import AppNavbar from '../Shared/AppNavbar/AppNavbar';
const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <>

        <section className="services">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our services</h5>
                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }

                </div>
            </div>
        </section>
        </>
    );
};

export default Services;