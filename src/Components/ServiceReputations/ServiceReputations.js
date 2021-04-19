import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceReputations = () => {
    return (
        <div className="container mt-5  ms-auto me-auto mb-5">
            <div className="row ms-auto me-auto">
                <div className="col-md-12 col-lg-4">
                    <img src={'https://i.ibb.co/kKH443Y/about.jpg'} alt="Teeth" width="100%" height="100%" style={{ backgroundSize: 'cover' }} />
                </div>
                <div className="col-md-12 col-lg-8 ms-auto me-auto" style={{ margin: 'auto 0' }}>
                    <h3 className="mainTextCol">Fast Servicing Of <br /> Your Devices</h3>
                    <small className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, magnam aspernatur. Consequuntur quisquam eveniet saepe sit quibusdam beatae ipsum itaque. Lorem ipsum dolor sit amet consectetur </small>
                    <div className="container mt-2  ms-auto me-auto mb-2">
                        <div className="row ms-auto me-auto">
                            <div className="col-6">
                                <h1 className="text-bold text-success">
                                    502+
                                </h1>
                                <h3 className="text-bold text-secondary">users</h3>
                            </div>
                            <div className="col-6">
                                <h1 className="text-bold text-success">
                                    15+
                                </h1>
                                <h3 className="text-bold text-secondary">services</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/about"><Button className="mt-3 ms-auto me-auto ">Learn More</Button></Link>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ServiceReputations;