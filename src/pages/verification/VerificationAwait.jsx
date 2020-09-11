import React from "react";
import css from "../../styles/index.scss";

export default function VerificationAwait() {
  return (
    <div className={`${css["verification-await"]}`}>
      <h1>Please Wait While Your Account is being Verified</h1>
      <span>
        Your request to be verified as a Binusian is now proceeding, please
        check in the next 24 hours
      </span>
    </div>
  );
}
