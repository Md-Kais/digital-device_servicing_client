import React, { useContext } from 'react';
import './Service.css'
import {
    BrowserRouter as Router,
  
    useHistory,

} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import { ProductContext } from '../../App';


const Service = ({ service }) => {
    const history = useHistory();
    const [product, setProduct] = useContext(ProductContext);
    const handleClick = (service) => {
        setProduct(service);
        history.push('/book');
    }
    return (
     
        <Card style={{ width: '18rem' }} className="mt-3 mb-3 mr-2 backgroudChanger">
          
            {
                service.image ? <Card.Img   style={{ height: '200px' }} src={`data:image/png;base64,${service.image.img}`} alt="service" />
                    :
                    <Card.Img style={{ height: '200px' }} className="img-fluid mb-3 " src={`https://localhost:5000/${service.img}`} alt="" />
            }
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="mouseHoverReact backgroudChanger">
                    <h3 className="text-primary">{service.servicename}</h3>
                    <h4 className="text-secondary"> <FontAwesomeIcon className="text-primary" icon={faCoins} /> $ {service.cost}</h4>
                    <p>Category : {service.type} </p>
                </Card.Text>
                <Button className="mouseHoverReact"  variant="success" onClick={() => { handleClick(service) }}>Repair</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;

