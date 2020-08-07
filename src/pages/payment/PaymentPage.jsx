import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import Button from "../../components/Button/Button";

class PaymentPage extends Component {
  render() {
    return (
      <div className="payment-page">
        <TitleCard title="Payment">
          <h2>Order Details</h2>
          <div className="title">
            <span>Item</span>
            <span>Amount</span>
          </div>
          <div className="ticket">
            <h2>3 Day Pass</h2>
            <span>
              <span>Rp</span>
              <h2>30.000</h2>
            </span>
          </div>
          <hr className="white-lines" />
          <div className="orderid">
            <span>Order ID</span>
            <span>98754443</span>
          </div>
          <h2 className="header">Payment Method Instructions</h2>
          <ol className="outer-list">
            <li>balbsdlfbaskldbfajsdb;fjabsdfj;asdb;</li>
            <li>
              jfaskdjfk;jasdkfjaskldjfkajsdf;klajsd;klfjas;dklfja;lkdjfl;kadsj
            </li>
            <ol className="inner-list">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur, obc
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                dolorem ratione nulla dignissimos incidunt aliquam ducimus totam
                est sequi atque.
              </li>
            </ol>
          </ol>
          <h2 className="header">Upload Payment Receipt</h2>
          <div></div>
          <div>
            <input type="file" name="image" id="payment_image" />
          </div>
          <div>File Name: </div>
          <div>Status: </div>
        </TitleCard>
      </div>
    );
  }
}

export default PaymentPage;
