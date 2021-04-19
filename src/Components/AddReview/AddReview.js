import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
    const [info, setInfo] = useState({});
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const { email, photoURL, name } = loggedInUser;
    const handleBlur = e => {
        const newInfo = { ...info , photoURL,name,email };
       // newInfo[e.target.name] = e.target.value;
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    
    
    const handleSubmit = (event) => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('review', info.review);
        formData.append('photoURL',info.photoURL);
        
        fetch('https://polar-retreat-16445.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Review Added succesfully. Thanks a lot to give us this review')
            })
            .catch(error => {
                console.error(error)
            })
        event.preventDefault();
    }

    return (
        <>
         
            <Sidebar></Sidebar>
            <section className="container-fluid row">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Review</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input  type="email" className="form-control" name="email" value={email} placeholder="Enter Your email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Name</label>
                            <input  type="text" className="form-control" name="name"
                            value={name} placeholder="Enter Your Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Add a Review</label>
                            <textarea onBlur={handleBlur} type="textArea" className="form-control" name="review" placeholder="Add A Review" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>



                    </form>
                </div>
            </section>
        </>
    );
};

export default AddReview;