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

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
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
