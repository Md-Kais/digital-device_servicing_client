import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';



const Contact = () => {
    const [info, setInfo] = useState({});
    const history=useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email, photoURL, name } = loggedInUser;
    const handleBlur = e => {
        const newInfo = { ...info, photoURL, name, email };
        // newInfo[e.target.name] = e.target.value;
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }



    const handleSubmit = (event) => {
        if (loggedInUser.isSignedIn===true){
            const formData = new FormData()
            console.log(info);
            formData.append('name', info.name);
            formData.append('email', info.email);
            formData.append('review', info.review);
            formData.append('photoURL', info.photoURL);

            fetch('https://polar-retreat-16445.herokuapp.com/addReview', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert('Review Added Succesfully. Thanks for your review')
                })
                .catch(error => {
                    console.error(error)
                })
            event.preventDefault();
        }
        else{
            alert('Please Login via Google to add Review')
            history.push('/login');
        }
       
    }

    return (
     
            
        <div className="container mt-5  ms-auto me-auto mb-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="mainTextCol text-center text-primary mb-3">Contact</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" value={email} placeholder="Please Login First to add a review" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Name</label>
                            <input type="text" className="form-control" name="name"
                                value={name} placeholder="Please Login First to add a review" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Add a Review</label>
                            <textarea onBlur={handleBlur} type="textArea" className="form-control" name="review" placeholder="Add A Review" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>



                    </form>
                    </div>
                </div>
            </div>
        
    );
};

export default Contact;