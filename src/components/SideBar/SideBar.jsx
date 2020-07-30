import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Index";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";

class SideBar extends Component {
  render() {
    const { team } = this.props;
    return (
      <Card class="side-bar d-flex flex-column align-items-center">
        <img src={Logo} alt="Technoscape Logo" />
        <h4>
          Hello, <span>{team}</span>
        </h4>
        <h6>Verified</h6>
        <Link className="side-bar-button" to="/login">
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
          <span>Seminar Schedules</span>
        </Link>
        <Link className="side-bar-button" to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="85.748"
            viewBox="0 0 98 85.748"
          >
            <g id="credit" transform="translate(0 -32.004)">
              <g
                id="Group_1634"
                data-name="Group 1634"
                transform="translate(0 50.377)"
              >
                <g id="Group_1633" data-name="Group 1633">
                  <path
                    id="Path_3099"
                    data-name="Path 3099"
                    d="M94.937,164.746a3.064,3.064,0,0,0-3.062,3.063v21.438H6.125V152.5H39.812a3.062,3.062,0,1,0,0-6.125H6.125v-12.25H39.812a3.063,3.063,0,0,0,0-6.125H6.125A6.127,6.127,0,0,0,0,134.121v55.125a6.127,6.127,0,0,0,6.125,6.125h85.75A6.127,6.127,0,0,0,98,189.246V167.808A3.064,3.064,0,0,0,94.937,164.746Z"
                    transform="translate(0 -127.996)"
                    fill="#f4f4f4"
                  />
                </g>
              </g>
              <g
                id="Group_1636"
                data-name="Group 1636"
                transform="translate(12.25 87.127)"
              >
                <g id="Group_1635" data-name="Group 1635">
                  <path
                    id="Path_3100"
                    data-name="Path 3100"
                    d="M79.313,320H67.063a3.063,3.063,0,0,0,0,6.125h12.25a3.063,3.063,0,0,0,0-6.125Z"
                    transform="translate(-64 -319.996)"
                    fill="#f4f4f4"
                  />
                </g>
              </g>
              <g
                id="Group_1638"
                data-name="Group 1638"
                transform="translate(49 32.004)"
              >
                <g
                  id="Group_1637"
                  data-name="Group 1637"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3101"
                    data-name="Path 3101"
                    d="M303.144,41.435l-21.437-9.187a3.127,3.127,0,0,0-2.419,0L257.85,41.435A3.07,3.07,0,0,0,256,44.252V56.5c0,16.85,6.229,26.7,22.975,36.346a3.079,3.079,0,0,0,3.05,0C298.771,83.226,305,73.377,305,56.5V44.252A3.066,3.066,0,0,0,303.144,41.435ZM298.875,56.5c0,14.143-4.679,21.927-18.375,30.135-13.7-8.226-18.375-16.011-18.375-30.135V46.274L280.5,38.4l18.375,7.877Z"
                    transform="translate(-256 -32.004)"
                    fill="#f4f4f4"
                  />
                </g>
              </g>
              <g
                id="Group_1640"
                data-name="Group 1640"
                transform="translate(61.252 50.381)"
              >
                <g id="Group_1639" data-name="Group 1639">
                  <path
                    id="Path_3102"
                    data-name="Path 3102"
                    d="M343.364,128.68a3.083,3.083,0,0,0-4.306.478L329.429,141.2l-3.81-5.7a3.061,3.061,0,1,0-5.1,3.393l6.125,9.187a3.087,3.087,0,0,0,2.419,1.366h.129a3.063,3.063,0,0,0,2.395-1.151l12.25-15.312A3.065,3.065,0,0,0,343.364,128.68Z"
                    transform="translate(-320.011 -128.016)"
                    fill="#f4f4f4"
                  />
                </g>
              </g>
            </g>
          </svg>

          <span>Payment</span>
        </Link>
        <Link className="side-bar-button" to="/login">
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

export default SideBar;
