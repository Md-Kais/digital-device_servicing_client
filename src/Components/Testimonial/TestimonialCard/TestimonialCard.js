import React, { useEffect, useState } from 'react';

import './TestimonialCard.css';
import { Card } from 'react-bootstrap';


const TestimonialCard = () => {
    const [cardInfo, setCardInfo] = useState([]);
    useEffect(() => {

        fetch('https://polar-retreat-16445.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setCardInfo(data));

    }, []);
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>

            <div className="row ms-auto me-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    cardInfo.map((e) => {
                        return (
                            <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card className="borderDark" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Text className="mb-4">
                                            <small className="text-secondary">{e.review}</small>
                                        </Card.Text>
                                        <div className="d-flex " >
                                            <div>
                                                <img src={e.photoURL} alt={e.name}  width="75px" style={{borderRadius:'50%'}}/>
                                            </div>
                                            <div style={{ margin: 'auto 0' }}>
                                                <small className="text-primary boldText" >
                                                    {e.name}
                                                    <br /> <small className="text-secondary" style={{ fontSize: "6px", fontWeight: '100' }}>
                                                        {e.email}
                                                    </small>
                                                </small>


                                            </div>


                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TestimonialCard;