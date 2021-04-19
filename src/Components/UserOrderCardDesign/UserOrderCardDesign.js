import React from 'react';

const UserOrderCardDesign = ({ order }) => {
    const {servicename, status , image}=order;
    return (
        <div className="col col-lg-4 col-md-6 mt-3 mb-3 mr-3 adminWorkCard " style={{ margin: "auto 0", textAlign: 'center' }}>
            {
                image ? <img style={{ height: '200px', width: '230px', borderRadius: '20px', margin: "auto 0", textAlign: 'center' }} src={`data:image/png;base64,${image.img}`} alt="service" />
                    :
                    <img style={{ height: '200px', borderRadius: '20px' }} className="img-fluid mb-3" src={`https://localhost:5000/${order.img}`} alt="" />
            }
            <h5>{servicename}</h5>
        
           
            <h6 className="text-bold">Status:</h6>
                    <p>{status}</p>
                
            </div>
      
    );
};

export default UserOrderCardDesign;