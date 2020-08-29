import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "../Card/Index";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";
import AuthServices from "../../auth/AuthServices";

class SideBarAdmin extends Component {
  handleLogout = () => {
    AuthServices.logout();
  };
  render() {
    const { location } = this.props;
    let path = location.pathname;
    let top = path.split("/");
    return (
      <Card class="side-bar d-flex flex-column align-items-center">
        <img src={Logo} alt="Technoscape Logo" />
        <h4>Admin Panel</h4>
        <Link
          className={`side-bar-button ${
            top[2] === "schedule"
              ? "button-active"
              : top[2] === "verification"
              ? "is-disabled"
              : ""
          }`}
          to="/admin/user"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83.724"
            height="93.027"
            viewBox="0 0 83.724 93.027"
          >
            <path
              id="Path_2983"
              data-name="Path 2983"
              d="M77.421,10.3H72.77V1h-9.3v9.3H26.257V1h-9.3v9.3H12.3a9.26,9.26,0,0,0-9.256,9.3L3,84.724a9.3,9.3,0,0,0,9.3,9.3H77.421a9.33,9.33,0,0,0,9.3-9.3V19.605A9.33,9.33,0,0,0,77.421,10.3Zm0,74.421H12.3V33.559H77.421ZM21.605,42.862H44.862V66.119H21.605Z"
              transform="translate(-3 -1)"
              fill="#f7f5ef"
            />
          </svg>
          <span>Users</span>
        </Link>
        <Link
          className="side-bar-button"
          to={"/login"}
          onClick={this.handleLogout}
        >
          <svg
            id="XMLID_2_"
            xmlns="http://www.w3.org/2000/svg"
            width="90.95"
            height="67.634"
            viewBox="0 0 90.95 67.634"
          >
            <path
              id="XMLID_4_"
              d="M52.03,125.671H4.134a4.134,4.134,0,1,1,0-8.268h47.9l-5.345-5.345a4.134,4.134,0,0,1,5.846-5.846l12.4,12.4c.1.1.186.2.272.3.021.026.039.053.059.079.063.08.125.161.182.246.017.025.03.051.046.076.057.089.112.178.163.272.01.018.018.038.027.056.052.1.1.2.146.31.006.013.009.027.015.04.045.111.087.224.122.34,0,.015.007.03.011.045.033.114.064.229.087.346.007.035.01.071.016.106.017.1.034.2.044.295a4.074,4.074,0,0,1,0,.825c-.01.1-.027.2-.044.3-.006.034-.009.069-.016.1-.024.119-.054.235-.088.35,0,.013-.007.028-.011.041-.036.117-.077.23-.123.343,0,.012-.009.025-.014.037-.044.107-.095.21-.147.311-.009.018-.017.037-.026.055-.051.094-.107.184-.164.274-.015.024-.029.05-.045.074-.057.085-.12.166-.182.247-.02.026-.038.053-.059.079-.086.1-.177.2-.272.3l-12.4,12.4a4.134,4.134,0,1,1-5.846-5.846Z"
              transform="translate(24.805 -87.72)"
              fill="#e9e9e8"
            />
            <path
              id="XMLID_5_"
              d="M136.662,42.3a33.792,33.792,0,0,1,28.085,14.975,4.134,4.134,0,0,1-6.863,4.612A25.549,25.549,0,1,0,157.85,90.4a4.134,4.134,0,0,1,6.851,4.629A33.819,33.819,0,1,1,136.662,42.3Z"
              transform="translate(-102.845 -42.299)"
              fill="#e9e9e8"
            />
          </svg>
          <span>Logout</span>
        </Link>
      </Card>
    );
  }
}

export default withRouter(SideBarAdmin);
