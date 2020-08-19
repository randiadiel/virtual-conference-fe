import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    const {
      id,
      name,
      status,
      path,
      binusian,
      flazz,
      onVerifyPayment,
      onVerifyBinusian,
      onEditClick,
      payment_id,
      role,
      verify,
      onCancelPayment,
      onVerifyClick,
    } = this.props;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>Payment Status : {status === false ? "Unverified" : "Verified"}</p>
        {payment_id !== null ? (
          <React.Fragment>
            <div>
              <a
                className="badge badge-primary mb-3"
                href={path}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Payment
              </a>
            </div>
            {status === false ? (
              verify === id.toString() ? (
                <div>
                  <h5>Udah yakin mo diverif?</h5>
                  <button
                    id={id}
                    onClick={onVerifyPayment}
                    className="btn btn-primary mr-2"
                  >
                    Verify
                  </button>
                  <button onClick={onCancelPayment} className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={onVerifyClick}
                  id={id}
                >
                  Verify Payment
                </button>
              )
            ) : (
              <span></span>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <hr />
        {binusian === true ? (
          <React.Fragment>
            <div>
              <a
                className="badge badge-primary mb-3"
                href={flazz}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Flazz
              </a>
            </div>
            <button
              className="btn btn-warning"
              onClick={onVerifyBinusian}
              id={id}
            >
              Verify B
            </button>
          </React.Fragment>
        ) : (
          <span>
            {role === 3 ? (
              <p className="badge badge-success">Verified as Binusian</p>
            ) : (
              <p className="badge badge-danger">Not A Binusian</p>
            )}
          </span>
        )}
        <hr />
        <button id={id} className="btn btn-warning" onClick={onEditClick}>
          Edit
        </button>
      </div>
    );
  }
}
