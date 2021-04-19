
import React, { useEffect, useState } from 'react';
import Technician from '../Technician/Technician';



const Technicians = () => {
    const [technicians, setTechnicians] = useState([]);
    useEffect(() => {
        fetch('https://polar-retreat-16445.herokuapp.com/technicians')
            .then(res => res.json())
            .then(data => setTechnicians(data))
    }, [])

    return (
        <>
              
            <section className="technicians">
                <div className="container">
                    <h5 className="text-center  text-primary mb-5">Our technicians</h5>
                    <div className="row">
                        {
                            technicians.map(technician => <Technician key={technician._id} technician={technician} />)
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Technicians;