import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const ManageServiceCard = ({ service }) => {
    const deleteProduct = (id) => {
        fetch(`https://polar-retreat-16445.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                if(res===true){
                    alert('Service Deleted Succesfully');
                }
                else{
                    alert('Sorry Sir.Service Deleted Already. Please go to the home or delete another thing')
                }
            })
    }
    return (

        <div className="col-md-4 col-sm-6 text-center">
            {
                service.image ? <img style={{ height: '200px' }} src={`data:image/png;base64,${service.image.img}`} alt="service" />
                    :
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://localhost:5000/${service.img}`} alt="" />
            }
            <h4>{service.servicename}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faCoins} /> $ {service.cost}</p>
            <p>Category : {service.type} </p>
            <Button variant="danger" onClick={() => { deleteProduct(service._id) }}> Delete</Button>
        </div>

    );
};

export default ManageServiceCard;