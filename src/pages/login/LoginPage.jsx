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

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: "false",
    error: [],
  };

  componentDidMount() {}
  clearLocal = () => {
    AuthServices.logout();
    alert("done");
  };

  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const credential = {
      email,
      password,
    };
    const promise = await AuthServices.login(credential);
    const { status } = promise;
    if (status === 200) {
      localStorage.setItem("userInfo", JSON.stringify(promise.data.original));
      if (
        promise.data.original.user.role_id === 2 &&
        promise.data.original.user.flazz
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
      this.setState({ error: promise.data.original, status: 422 });
    } else {
      this.setState({ error: promise.data.original.error, status: 401 });
    }
  };

  render() {
    const { email, password, isLoggedIn, error, status } = this.state;
    if (isLoggedIn === "verification")
      return <Redirect to="/dashboard/verification"></Redirect>;
    if (isLoggedIn === "admin") return <Redirect to="/admin/user"></Redirect>;
    if (isLoggedIn === "participant" || isLoggedIn === "binusian")
      return <Redirect to="/dashboard/schedule"></Redirect>;
    return (
      <div
        className={
          "login-page d-flex justify-content-center align-items-center flex-column container-fluid"
        }
      >
        <img className="login-page-dots" src={Dots} alt="Dots Background" />
        <img
          className="login-page-background"
          src={LiquidBackground}
          alt="Liquid Background"
        />
        <img className="login-page-logo" src={Logo} alt="Logo" />
        <span className="login-page-description">
          Acquire Technology Insight to Build Your Remarkable Career
        </span>

        <Card class={"login-page-card d-flex flex-column"}>
          <h2 className={"text-center mb-3"}>Login</h2>
          <form onSubmit={this.handleSubmitForm}>
            {error.length === 0 ? (
              ""
            ) : (
              <div className="alert alert-danger" role="alert">
                {status === 401 ? (
                  <div>{error}</div>
                ) : (
                  Object.values(error).map((e) => e.map((e) => <div>{e}</div>))
                )}
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
            ></TextBox>
            <TextBox
              placeholder="Password"
              name={"password"}
              type={"password"}
              value={password}
              onChange={this.onChange}
              icon={PasswordImage}
              alt={"Password Image"}
            ></TextBox>
            <span className="align-self-end font-size-small p-1"></span>
            <input style={{ display: "none" }} type="submit" />
            <Button onClick={this.handleSubmitForm}>Login</Button>
          </form>
          <span className="text-center">
            <span className="color-primary">Not registered?</span>{" "}
            <Link to="/register">Click here!</Link>
          </span>
        </Card>
      </div>
    );
  }
}
export default LoginPage;
