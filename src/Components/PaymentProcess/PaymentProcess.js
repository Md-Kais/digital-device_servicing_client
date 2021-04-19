import React, { useContext } from 'react';
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import { ProductContext } from '../../App';
import Sidebar from "../Sidebar/Sidebar";





import PaymentCard from "./PaymentCard";

const stripePromise = loadStripe("pk_test_51IhJC7JSrcQCynh14cYD1GerD1U39wyPbRIl6UmnugvDXG4kjmfeXq8Hc136tPP1im6Kbld5X5AdsObuQh6e5G6U00Y305RSyL");



const PaymentProcess = () => {
    const [product, setProduct] = useContext(ProductContext);
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <Elements stripe={stripePromise}>
                    <PaymentCard product={product}></PaymentCard>
                </Elements>
            </div>
        </section>

    );
};

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);
export default PaymentProcess;
