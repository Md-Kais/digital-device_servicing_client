import React, { useContext } from 'react';


const Technician = ({technician}) => {
    const { name, email, photoUrl }=technician;
   console.log(name,email,photoUrl);
   
    return (
        <div className="col-md-4 col-sm-6 text-center">
            
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={photoUrl} alt="" />
            <p>Name:{name}</p>
           <small className="text-secondary">{email}</small>
        </div>
        
    );
};

export default Technician;