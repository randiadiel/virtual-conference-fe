import React, { Component } from "react";

import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Index";
import LoginPage from "../login/LoginPage";
import VerificationAwait from "../verification/VerificationAwait";
import TitleCard from "../../components/TitleCard/TitleCard";
import SchedulePage from "../schedule/SchedulePage";

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <SideBar team="Randi"></SideBar>
        <Card class="dashboard-page-content">
          <SchedulePage></SchedulePage>
          {/* <VerificationAwait></VerificationAwait> */}
        </Card>
      </div>
    );
  }
}

export default DashboardPage;
