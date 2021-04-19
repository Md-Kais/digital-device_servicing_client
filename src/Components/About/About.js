import React from 'react';
import Services from '../Servcies/Services';
import AppNavbar from '../Shared/AppNavbar/AppNavbar';
import Technician from '../Technician/Technician';
import Technicians from '../Technicians/Technicians';

const About = () => {
    return (
        <div>
            <AppNavbar></AppNavbar>
            <div className="mt-5"></div>
            <Services></Services>
            <div className="mt-5"></div>
            <Technicians></Technicians>
            <div className="mt-5"></div>
        </div>
    );
};

export default About;