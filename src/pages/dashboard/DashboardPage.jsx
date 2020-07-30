import React, { Component } from "react";

import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Index";
import LoginPage from "../login/LoginPage";
import VerificationAwait from "../verification/VerificationAwait";
import TitleCard from "../../components/TitleCard/TitleCard";

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <SideBar team="Randi"></SideBar>
        <Card class="dashboard-page-content">
          <TitleCard title="Verification"></TitleCard>
        </Card>
      </div>
    );
  }
}

export default DashboardPage;
