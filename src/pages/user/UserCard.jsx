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
      onEditClick,
      payment_id,
      role,
    } = this.props;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>File Name : {payment}</p>
        <p>Payment Status : {status === false ? "Unverified" : "Verified"}</p>
        {payment_id !== null ? (
          <React.Fragment>
            <a href={path} target="_blank">
              View Payment
            </a>
            {status === false ? (
              <button
                className="btn btn-warning"
                onClick={onVerifyPayment}
                id={id}
              >
                Verify P
              </button>
            ) : (
              <span></span>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {binusian === true ? (
          <button
            className="btn btn-warning"
            onClick={onVerifyBinusian}
            id={id}
          >
            Verify B
          </button>
        ) : (
          <span>
            {role === 3 ? (
              <p className="text-success">Verified as Binusian</p>
            ) : (
              <p className="text-danger">Not A Binusian</p>
            )}
          </span>
        )}
        <button id={id} className="btn btn-warning" onClick={onEditClick}>
          Edit
        </button>
      </div>
    );
  }
}
