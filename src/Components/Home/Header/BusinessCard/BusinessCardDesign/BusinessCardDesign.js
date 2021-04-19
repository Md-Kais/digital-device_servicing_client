import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessCardDesign = ({ e }) => {
   
    return (
        // <div className="container">
        <div className="row m-1 p-3" style={{ width: '350px', backgroundColor: `${e.bg}`, borderRadius: '20px', color: 'wheat' }}>
            <div className="col-3" style={{ display: "flex", justifyContent: 'flex-end', fontSize: '3rem', alignContent: 'center', margin: 'auto 0' }}>

                <FontAwesomeIcon icon={e.icon} />

            </div>
            <div className="col-9">
                <h5>{e.title}</h5>
                <small>{e.description}</small>

            </div>

        </div>

        // </div>
    );
};

export default BusinessCardDesign;