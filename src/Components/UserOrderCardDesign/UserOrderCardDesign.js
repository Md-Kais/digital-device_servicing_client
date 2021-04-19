import React from 'react';

const UserOrderCardDesign = ({ order }) => {
    const {servicename, status , image}=order;
    return (
        <div>
            <div className="col-md-4">
                {
                    image ? <img style={{ height: '200px' }} src={`data:image/png;base64,${image.img}`} alt="service" />
                        :
                        <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://localhost:5000/${order.img}`} alt="" />
                }
                    <p>{servicename}</p>
                    <p>{status}</p>
                
            </div>
        </div>
    );
};

export default UserOrderCardDesign;