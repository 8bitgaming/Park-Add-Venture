import React, { useState } from "react";
import Paypal from "../../pages/PayPal";

const Donation = () => {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Donation;
