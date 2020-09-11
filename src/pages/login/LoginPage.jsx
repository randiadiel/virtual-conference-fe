import React, { Component } from "react";
import AuthServices from "../../auth/AuthServices";
import EmailImage from "../../assets/LoginIcon/login-email.svg";
import PasswordImage from "../../assets/LoginIcon/icon-password.png";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";
import LiquidBackground from "../../assets/LoginPage/login-bg-liquid.png";
import Dots from "../../assets/LoginPage/login-bg-dots.png";
import TextBox from "../../components/TextBox/TextBox";
import Card from "../../components/Card/Index";
import Button from "../../components/Button/Button";
import { Redirect, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Axios from "axios";
import css from "../../styles/index.scss";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: "false",
    error: [],
    loader: false,
  };
  CancelToken = Axios.CancelToken;
  source = this.CancelToken.source();

  componentDidMount() {}
  clearLocal = () => {
    AuthServices.logout();
  };

  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    this.setState({ loader: true });

    const { email, password } = this.state;
    const credential = {
      email,
      password,
    };
    const promise = await AuthServices.login(credential, this.source.token);
    const { status } = promise;
    if (status === 200) {
      localStorage.setItem("userInfo", JSON.stringify(promise.data.original));
      if (
        promise.data.original.user.role_id === 2 &&
        promise.data.original.user.Binusian.flazz
      ) {
        this.setState({ isLoggedIn: "verification" });
      } else if (promise.data.original.user.role_id === 1) {
        this.setState({ isLoggedIn: "admin" });
      } else if (promise.data.original.user.role_id === 2) {
        this.setState({ isLoggedIn: "participant" });
      } else if (promise.data.original.user.role_id === 3) {
        this.setState({ isLoggedIn: "binusian" });
      }
      this.setState({ isLoggedIn: "participant" });
    } else if (status === 422) {
      this.setState({
        error: promise.data.original,
        status: 422,
        loader: false,
      });
    } else {
      this.setState({
        error: promise.data.original.error,
        status: 401,
        loader: false,
      });
    }
  };
  componentWillUnmount() {
    this.source.cancel("Operation canceled by the user.");
  }
  render() {
    const { email, password, isLoggedIn, error, status, loader } = this.state;
    let path = this.props.location.search;
    let top = [];
    if (path != null) {
      top = path.split("?");
    }
    if (isLoggedIn === "verification")
      return <Redirect to="/dashboard/verification"></Redirect>;
    if (isLoggedIn === "admin") return <Redirect to="/admin/user"></Redirect>;
    if (isLoggedIn === "participant" || isLoggedIn === "binusian")
      return <Redirect to="/dashboard/schedule"></Redirect>;
    return (
      <div
        className={`${css["login-page"]} ${css["d-flex"]} ${css["justify-content-center"]} ${css["align-items-center"]} ${css["container-fluid"]} ${css["flex-column"]}`}
      >
        <img
          className={`${css["login-page-dots"]}`}
          src={Dots}
          alt="Dots Background"
        />

        <img
          className={`${css["login-page-background"]}`}
          src={LiquidBackground}
          alt="Liquid Background"
        />
        <a href="https://virtualconference.bncc.net/" style={{ zIndex: 10 }}>
          <img className={`${css["login-page-logo"]}`} src={Logo} alt="Logo" />
        </a>
        <span className={`${css["login-page-description"]}`}>
          Acquire Technology Insight to Build Your Remarkable Career
        </span>

        <Card
          class={`${css["login-page-card"]} ${css["d-flex"]} ${css["flex-column"]}`}
        >
          <h2 className={`${css["text-center"]} ${css["mb-3"]}`}>Login</h2>
          <form onSubmit={this.handleSubmitForm}>
            {error.length === 0 ? (
              ""
            ) : (
              <div
                className={`${css["alert"]} ${css["alert-danger"]}`}
                role="alert"
              >
                {status === 401 ? (
                  <div>{error}</div>
                ) : (
                  Object.values(error).map((e) => e.map((e) => <div>{e}</div>))
                )}
              </div>
            )}
            {top[1] != null && (
              <div
                className={`${css["alert"]} ${css["alert-danger"]}`}
                role="alert"
              >
                <div>{top[1]}</div>
              </div>
            )}
            <TextBox
              placeholder="Email"
              name={"email"}
              value={email}
              type={"email"}
              onChange={this.onChange}
              icon={EmailImage}
              alt={"Group Image"}
              autocomplete={"username"}
            ></TextBox>
            <TextBox
              placeholder="Password"
              name={"password"}
              type={"password"}
              value={password}
              onChange={this.onChange}
              icon={PasswordImage}
              alt={"Password Image"}
              autocomplete={"current-password"}
            ></TextBox>
            <span
              className={`${css["align-self-end"]} ${css["font-size-small"]} ${css["p-1"]}`}
            ></span>
            <input style={{ display: "none" }} type="submit" />
            {loader === true ? (
              <Loader></Loader>
            ) : (
              <Button onClick={this.handleSubmitForm}>Login</Button>
            )}
          </form>
          <span className={`${css["text-center"]}`}>
            <span className={`${css["color-primary"]}`}>Not registered?</span>{" "}
            <Link to="/register">Click here!</Link>
          </span>
        </Card>
      </div>
    );
  }
}
export default LoginPage;
