import React from 'react';

const Testimonial = () => {
    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-6" style={{ margin: "auto 0" }}>

                    <h5 className="text-primary">Testimonial</h5>
                    <h3 className='mainTextCol'>What's Our Client<br />Says</h3>


                </div>
                <div className="col-sm-6" style={{ textAlign: 'end' }}>


                    <img src={window.location.origin + '/images/quotation.png'} alt="Teeth" width="250px" height="250px" style={{ backgroundColor: 'white' }} /> </div>

            </div>
        </div>
    );
};

export default Testimonial;