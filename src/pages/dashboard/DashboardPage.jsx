import React, { Component } from "react";
import { Route } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Index";
import LoginPage from "../login/LoginPage";
import VerificationAwait from "../verification/VerificationAwait";
import VerificationPayment from "../verification/VerificationPayment";
import TitleCard from "../../components/TitleCard/TitleCard";
import SchedulePage from "../schedule/SchedulePage";
import PaymentPage from "../payment/PaymentPage";
import AuthServices from "../../auth/AuthServices";
import InputNim from "../inputnim/InputNim";
import Api from "../../api/Api";

class DashboardPage extends Component {
  state = {
    user: "",
    success: false,
  };
  componentDidMount() {
    const user = AuthServices.getUserInfo().user;
    this.setState({ user });
  }
  onNimSuccess = (NIM, jurusan) => {
    console.log(NIM, jurusan);
    Api.refresh();
    this.setState({ success: true });
  };
  render() {
    const { user, success } = this.state;
    return (
      <div className="dashboard-page d-flex flex-column justify-content-center align-items-center align-items-lg-start flex-lg-row">
        {user.role_id === 3 &&
        user.Binusian.NIM === null &&
        success === false ? (
          <InputNim onSuccess={this.onNimSuccess}></InputNim>
        ) : (
          <div></div>
        )}
        <SideBar team="Randi"></SideBar>
        <Card class="dashboard-page-content">
          <Route path={"/dashboard/payment"} component={PaymentPage}></Route>
          <Route path={"/dashboard/schedule"} component={SchedulePage}></Route>
          <Route
            path={"/dashboard/verification"}
            component={VerificationAwait}
          ></Route>
          <Route
            path={"/dashboard/payment-verification"}
            component={VerificationPayment}
          ></Route>
        </Card>
      </div>
    );
  }
}

export default DashboardPage;
