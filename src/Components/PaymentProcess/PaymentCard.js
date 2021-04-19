import React, { useContext, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";

import './PaymentCard.css'
import useResponsiveFontSize from "../useResponsiveFontSize";
import { UserContext } from "../../App";
import { useHistory } from "react-router";


const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",

                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const PaymentCard = ({ product }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(product);
    const history=useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const { email } = loggedInUser;
    const { servicename , _id , image} = product;

    console.log(email, servicename , _id)
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null)
        }
        else {
            setPaymentError(null);
            setPaymentSuccess(paymentMethod.id);
            ;
            fetch('https://polar-retreat-16445.herokuapp.com/addOrder', {

                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    'email': email,
                    'servicename': servicename,
                    'id':_id,
                    'image':image,
                    'status':'pending'
                })
            })
                .then(res => res.json())
                .then(success => {
                    if (success) {

                        alert('Payment Done SuccessFully. Your Product is now added to the card');
                        history.push('/orderList')
                    }
                    
                })
        }
        //  console.log("[PaymentMethod]", paymentMethod);
    };

    return (
        <div>
            
            <h1 className="text-success">PAYMENT </h1>
            <br />
            <h3 className="text-primary"> This cost {product.cost} USD.</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <label className="paymentCardLabel">
                    Card number
            <CardNumberElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label className="paymentCardLabel">
                    Expiration date
        <CardExpiryElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label className="paymentCardLabel">
                    CVC
            <CardCvcElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <button className="paymentCardbutton" type="submit" disabled={!stripe}>
                    Pay
      </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Payment was succesful</p>
            }
        </div>
    );
};

export default PaymentCard;