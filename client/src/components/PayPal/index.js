import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../../pages/homepage.css';
import { Card, Col, Button } from "react-bootstrap";
 
const Donation = () => {
 const [show, setShow] = useState(false);
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);
 
 // creates a paypal order
 const createOrder = (data, actions) => {
   return actions.order
     .create({
       purchase_units: [
         {
           description: "Donation",
           amount: {
             currency_code: "USD",
             value: 2,
           },
         },
       ],
       // not needed if a shipping address is actually needed
       application_context: {
         shipping_preference: "NO_SHIPPING",
       },
     })
     .then((orderID) => {
       setOrderID(orderID);
       return orderID;
     });
 };
 
 // check Approval
 const onApprove = (data, actions) => {
   return actions.order.capture().then(function (details) {
     const { payer } = details;
     setSuccess(true);
   });
 };
 //capture likely error
 const onError = (data, actions) => {
   setErrorMessage("An Error occured with your payment ");
 };


     return (
    <div className="homepage">
        <PayPalScriptProvider
         options={{ 
             "client-id": "AZ8NMpSAYspW10o7YN7F5eRibNJ8wLR8xrNTu-ApNL6VHA_dhTZmucnT7E4_JwvcB0qwPCAGVgXspET5",
            }}
            >
           <Col className="container-fluid d-flex justify-content-center">
       <Card className="yellow-background" style={{ width: "25rem" }}>
         <Card.Img 
            className="product-img"
             src={require('../../images/Badge.png')}
             alt="Logo Picture"
           />
         <Card.Body className="">
             <p className="fs-1 text-centered">Donations</p>
             <p className="fs-4">
               Donations will go directly to the production for 
               Park-Add-Venture. This is just a test now but 
               will be ready to launch for production.{" "}
             </p>
 
           <div className="d-grid gap-2">
             <p>
               <span>$2</span>
             </p>
             <Button type="submit" variant="success" className="shadow" onClick={() => setShow(true)}>
               Donate
             </Button>
           </div>
         </Card.Body>
       
 
       {show ? (
        <Card.Body>
         <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
         </Card.Body>
       ) : null}
       </Card>
     </Col>
   </PayPalScriptProvider>
   </div>
    );
 }

 export default Donation;
