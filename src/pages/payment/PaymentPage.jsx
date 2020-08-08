import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import Button from "../../components/Button/Button";
import FileUpload from "../../components/FileUpload/FileUpload";
import AuthServices from "../../auth/AuthServices";
import Api from "../../api/Api";

class PaymentPage extends Component {
  state = {
    file: { size: 0, name: "Choose File" },
  };
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  handleFileChange = () => {
    this.setState({ file: this.fileInput.current.files[0] });
  };
  handleFileSubmit = () => {
    let form_data = new FormData();
    form_data.append("image", this.state.file, this.state.file.name);
    const promise = Api.handleFormDataPost("/auth/payment", form_data, true);
    console.log(promise);
  };
  render() {
    const user = AuthServices.getUserInfo().user;
    const { file } = this.state;
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
          <div className="row">
            <div className="col-lg-6 col-xl-4">
              <FileUpload
                onChange={this.handleFileChange}
                reference={this.fileInput}
                label={file.name}
              ></FileUpload>
            </div>
          </div>
          <div className="file-status">
            <div>Size: {file.size} B</div>
            <Button onClick={this.handleFileSubmit}>Upload</Button>

            <div>
              File :{" "}
              <a href={user.Payment.image} target="_blank">
                {user.Payment.name}
              </a>
            </div>
            <div>
              Status : {user.Payment.status === 0 ? "Unverified" : "Verified"}
            </div>
          </div>
        </TitleCard>
      </div>
    );
  }
}

export default PaymentPage;
