import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import AppNavbar from '../Shared/AppNavbar/AppNavbar';


const AddReview = () => {
    const [info, setInfo] = useState({});
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const { email, photoURL, displayName } = loggedInUser;
    const handleBlur = e => {
        const newInfo = { ...info , photoURL };
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
        
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        event.preventDefault();
    }

    return (
        <>
            <AppNavbar></AppNavbar>

            <section className="container-fluid row">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Technicians</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Your email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Your Name" />
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