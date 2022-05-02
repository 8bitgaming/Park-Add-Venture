import React, { useRef, useEffect } from "react";
import "../../App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Donation = () => {


    const store = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Donations for Development",
                            amount: {
                                currency_code: "USD",
                                value: 1.00,
                            },
                        },
                    ],
                });
            },
            onError: (err) => {
                console.log(err)
            },
        }).render(store.current)
    }, [])

    return (
        <Container ref={store} className="container-fluid d-flex justify-content-center" />
            
      
    )
}

export default Donation;