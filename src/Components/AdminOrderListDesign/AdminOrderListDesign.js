import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './AdminOrderListDesign.css'
const AdminOrderListDesign = ({ order }) => {
   
    const {status,image,servicename, _id , email}=order;
    const [nextStatus, setNextStatus] = useState(status);
  

    const statusChanger=(value)=>{
        setNextStatus(value)
       
        fetch('https://polar-retreat-16445.herokuapp.com/updateOrder', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                'status': nextStatus,
                'id': _id
            })
        })
            .then(res => res.json())
            .then(success => {
                alert('Work Succesfully changed')
            })
    }

   


    return (
        <div className="col col-lg-4 col-md-6 mt-3 mb-3 mr-3 adminWorkCard "style={{margin:"auto 0",textAlign:'center'}}>
            {
                image ? <img style={{ height: '200px',width:'230px',borderRadius: '20px', margin: "auto 0", textAlign: 'center'  }} src={`data:image/png;base64,${image.img}`} alt="service" />
                    :
                    <img style={{ height: '200px', borderRadius: '20px' }} className="img-fluid mb-3" src={`https://localhost:5000/${order.img}`} alt="" />
            }
            <h5>{servicename}</h5>
            <small className="text-secondary">Client:</small><br/>
            <small className="text-secondary">{email}</small>
  <h6 className="text-bold">Status:</h6>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {nextStatus}
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { statusChanger('pending') }}>Pending</Dropdown.Item>
                    <Dropdown.Item onClick={() => { statusChanger('in Progress') }}>in Progress</Dropdown.Item>
                    <Dropdown.Item onClick={() => { statusChanger('done') }}>Done</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          

        </div>
    );
};

export default AdminOrderListDesign;