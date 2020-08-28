import React, { Component } from "react";
import { Route } from "react-router-dom";

import Card from "../../components/Card/Index";
import AuthServices from "../../auth/AuthServices";
import Api from "../../api/Api";
import UserPage from "../user/UserPage";
import SideBarAdmin from "../../components/SideBar/SideBarAdmin";

class AdminPage extends Component {
  state = {
    user: "",
    success: false,
    edit: {},
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
    return (
      <div className="dashboard-page">
        <SideBarAdmin team="Randi"></SideBarAdmin>
        <Card class="dashboard-page-content">
          <Route path={"/admin/user"} component={UserPage}></Route>
        </Card>
      </div>
    );
  }
}

export default AdminPage;
