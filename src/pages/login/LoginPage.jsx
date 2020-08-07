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
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
  };

  componentDidMount() {}

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
    const { message, status } = promise;
    if (status === 200) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify(promise.message.original)
      );
      alert(JSON.stringify(promise));
      this.setState({ isLoggedIn: true });
    } else {
      alert(message.original.error);
      this.setState({ message });
    }
  };

  render() {
    const { email, password, isLoggedIn } = this.state;
    if (isLoggedIn == true)
      return <Redirect to="/admin/verification"></Redirect>;
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
        <span>Acquire Technology Insight to Build Your Remarkable Career</span>

        <Card class={"login-page-card d-flex flex-column"}>
          <h2 className={"text-center mb-3"}>Login</h2>
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
          <span className="align-self-end font-size-small">
            Forgot password?
          </span>
          <Button onClick={this.handleSubmitForm}>Login</Button>
          <span className="text-center">
            <span className="color-primary">Not registered?</span> Click here!
          </span>
        </Card>
      </div>
    );
  }
}
export default LoginPage;
