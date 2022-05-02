// import React, { useState, useRef, useEffect } from "react";
// import "../../App.css";

// const Donation = () => {

//     const [checkout, setCheckOut] = useState(false);

//     const store = useRef();

//     useEffect(() => {
//         window.paypal
//         .Buttons({
//             createOrder: (data, actions, err) => {
//                 return actions.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Donations for Development",
//                             amount: {
//                                 currency_code: "USD",
//                                 value: 1.00,
//                             },
//                         },
//                     ],
//                 });
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.catputre()
//                 console.log(order);
//             },
//             onError: (err) => {
//                 console.log(err)
//             },
//         }).render(store.current)
//     }, [])

//     return (
//         <div ref={store}>
//             <button
//                 onClick={() => {
//                     setCheckOut(true);
//                 }}
//             >
//                 Checkout
//             </button>
//         </div>
//     )
// }

// export default Donation;