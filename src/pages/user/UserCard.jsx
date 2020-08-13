import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    const {
      id,
      name,
      status,
      payment,
      path,
      binusian,
      onVerifyPayment,
      onVerifyBinusian,
      payment_id,
    } = this.props;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>File Name : {payment}</p>
        <p>Payment Status : {status === 0 ? "Unverified" : "Verified"}</p>
        {payment_id !== null ? (
          <React.Fragment>
            <a href={path}>View Payment</a>
            <button onClick={onVerifyPayment} id={id}>
              Verify P
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {binusian === true ? (
          <button onClick={onVerifyBinusian} id={id}>
            Verify B
          </button>
        ) : (
          <span></span>
        )}
        <button>Edit</button>
      </div>
    );
  }
}
