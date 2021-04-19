import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
   
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { ProductContext } from '../../App';


const Service = ({ service }) => {
    const history=useHistory();
    const [product, setProduct] = useContext(ProductContext);
    const handleClick=(service)=>{
        setProduct(service);
        history.push('/book');
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
            <Button variant="success" onClick={()=>{handleClick(service)}}>Repair</Button>
        </div>
    );
};

export default Service;