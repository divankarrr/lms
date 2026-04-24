import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ amount, onSuccess, onError }) => {
  return (
    <div className="mt-4">

      <PayPalScriptProvider
        options={{
          "client-id": "AWfJMs04IUP9xQDT6RbnLSwUucxSCEXrgEQTH-_h3umfspyMweW5SGm06T-7gbsw8UT1Siqo4oU0mu7d",
          currency: "USD",
        }}
      >
        <PayPalButtons

          style={{ layout: "vertical" }}

          // 🟢 Create Order
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount, // props se aa raha
                  },
                },
              ],
            });
          }}

          // ✅ Payment Success
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log("✅ Payment Successful:", details);

              if (onSuccess) {
                onSuccess(details); // 🔥 navigate("/my-order") yahi se trigger hoga
              }
            });
          }}

          // ❌ Payment Error
          onError={(err) => {
            console.error("❌ Payment Failed:", err);

            if (onError) {
              onError(err);
            }
          }}
        />
      </PayPalScriptProvider>

    </div>
  );
};

export default Paypal;