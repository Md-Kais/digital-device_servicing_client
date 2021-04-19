import React, { useState } from 'react';
import AppNavbar from '../Shared/AppNavbar/AppNavbar';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const AddTechinicians = () => {
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange  = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '6b471042df35b267514f08a09dc5b873');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
      
            .then(function (response) {
              
                console.log(response.data.data.display_url);

                const photoUrl = response.data.data.display_url;
                
                console.log(photoUrl);
                const newInfo = { ...info };
                newInfo[event.target.name] = photoUrl;
                setInfo(newInfo);
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            alert('Please wait for 3 second to upload your picture properly')
        }, 3000);
            
    }

    const handleSubmit = (event) => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('photoUrl', info.photoUrl);   
        fetch('https://polar-retreat-16445.herokuapp.com/addTechnicians', {
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
            {/* <AppNavbar></AppNavbar> */}
    <Sidebar></Sidebar>
            <section className="container-fluid row">

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Technicians</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"> Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Technician's Name" />
                        </div>



                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" name="photoUrl" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddTechinicians;