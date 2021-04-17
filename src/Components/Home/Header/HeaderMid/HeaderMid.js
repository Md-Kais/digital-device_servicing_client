
import React from 'react';
import { Button } from 'react-bootstrap';

import './HeaderMid.css'
const HeaderMidArticle = () => {
    return (
        <div className="mt-5 spacingDiv">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-6 ms-auto p-5 me-auto">
                        <h1>Your Device Problems <br /></h1>
                        <h1>Solution Here</h1>
                        <br />
                        <small className="text-secondary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sequi rerum tenetur, similique officia perspiciatis odio optio sint ducimus est.</small>
                        <br />
                        <Button className="mt-3">Repair Device</Button>
                    </div>
                    <div className="col-md-12 col-lg-6  ms-auto me-auto" >
                        <img src={window.location.origin + '/Images/headerSide.jpg'} alt="hello world" width="100%" height="100%" className="mb-3" style={{borderRadius:'20px'}}></img>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderMidArticle;