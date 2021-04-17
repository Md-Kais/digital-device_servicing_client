import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BusinessCardDesign from '../BusinessCardDesign/BusinessCardDesign';
const BusinessCardInformation = [
    {
        'title': 'Opening Hours',
        'description': 'Lorem Ipsum is a shit please sotnfasfsadf safs',
        'icon': faClock,
        'bg': 'teal'
    },
    {
        'title': 'Visit Our Location',
        'description': 'Brooklyn,NY 100231,United States',
        'icon': faMapMarkerAlt,
        'bg': '#3A4256'
    },
    {
        'title': 'Contact Us Now',
        'description': '+8801735200081',
        'icon': faPhoneAlt,
        'bg': 'teal'
    },

]
const BusinessCardInfo = () => {
    return (
        <div style={{ margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
            <div className="ms-auto me-auto mt-5" >

                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="row m-1" style={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }}>
                        {
                            BusinessCardInformation.map((e) => {
                                return (
                                    <BusinessCardDesign e={e}></BusinessCardDesign>
                                )

                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCardInfo;