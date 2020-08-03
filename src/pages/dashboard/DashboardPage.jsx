import React, { Component } from "react";
import { Route } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Index";
import LoginPage from "../login/LoginPage";
import VerificationAwait from "../verification/VerificationAwait";
import TitleCard from "../../components/TitleCard/TitleCard";
import SchedulePage from "../schedule/SchedulePage";
import PaymentPage from "../payment/PaymentPage";

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <SideBar team="Randi"></SideBar>
        <Card class="dashboard-page-content">
          <Route path={"/admin/payment"} component={PaymentPage}></Route>
          <Route path={"/admin/schedule"} component={SchedulePage}></Route>
          <Route
            path={"/admin/verification"}
            component={VerificationAwait}
          ></Route>
        </Card>
      </div>
    );
  }
}

export default DashboardPage;
