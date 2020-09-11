import React from "react";
import css from "../../styles/index.scss";

export default function VerificationPayment() {
  return (
    <div className={`${css["verification-await"]}`}>
      <h1>Your Payment is Pending</h1>
      <span>
        Please Proceed the payment. You will be able to see your seminar
        schedule and links after completing the payment.
      </span>
    </div>
  );
}
