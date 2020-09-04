import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Button from "../../components/Button/Button";

export default class PaymentVerified extends Component {
  render() {
    return (
      <div className="payment-verified verification-await">
        <ReactTooltip></ReactTooltip>
        <h1>Thank You, {this.props.name}</h1>
        <span>Your Payment Has Been Verified.</span>
        <div
          className="mt-3"
          data-tip={`<img alt="receipt" src="https://virtualconference-app.s3-ap-southeast-1.amazonaws.com/${this.props.payment.image}"/>`}
          data-html={true}
        >
          <Button>Payment Receipt</Button>
        </div>
      </div>
    );
  }
}
