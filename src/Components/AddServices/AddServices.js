import React, { useState } from 'react';
import AppNavbar from '../Shared/AppNavbar/AppNavbar';
import Sidebar from '../Sidebar/Sidebar';


const AddServices = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (event) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('servicename', info.servicename);
        formData.append('email', info.email);
        formData.append('cost', info.cost);
        formData.append('type', info.type);


        fetch('https://polar-retreat-16445.herokuapp.com/addService', {
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
                    <h5 className="text-brand">Add Services</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Service Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="servicename" placeholder="Services Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Cost of this Service</label>
                            <input onBlur={handleBlur} type="number" className="form-control" name="cost" placeholder="Enter cost of this services" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Type of this Service</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="type" placeholder="Enter type of the services" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddServices;