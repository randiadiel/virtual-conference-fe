import React, { Component } from "react";
import EmailImage from "../../assets/LoginIcon/login-email.svg";
import PasswordImage from "../../assets/LoginIcon/icon-password.png";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";
import LiquidBackground from "../../assets/LoginPage/login-bg-liquid.png";
import Dots from "../../assets/LoginPage/login-bg-dots.png";
import TextBox from "../../components/TextBox/TextBox";
import Card from "../../components/Card/Index";
import Button from "../../components/Button/Button";

class RegisterPage extends Component {
  state = {
    name: "",
    phone: "",
    lineid: "",
    email: "",
    password: "",
    confirm: "",
    role: "",
  };

  componentDidMount() {}

  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    alert("yey");
  };

  render() {
    const { name, phone, lineid, email, password, confirm } = this.state;
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
          <h2 className={"text-center mb-3"}>Registration</h2>
          <TextBox
            placeholder="Full Name"
            name={"name"}
            value={name}
            type={"text"}
            onChange={this.onChange}
            icon={EmailImage}
            alt={"Name Image"}
          ></TextBox>
          <TextBox
            placeholder="Whatsapp Number"
            name={"phone"}
            type={"text"}
            value={phone}
            onChange={this.onChange}
            icon={PasswordImage}
            alt={"Phone Image"}
          ></TextBox>
          <TextBox
            placeholder="Line ID"
            name={"lineid"}
            type={"text"}
            value={lineid}
            onChange={this.onChange}
            icon={PasswordImage}
            alt={"Line Image"}
          ></TextBox>
          <TextBox
            placeholder="Email"
            name={"email"}
            type={"email"}
            value={email}
            onChange={this.onChange}
            icon={EmailImage}
            alt={"Email Image"}
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
          <TextBox
            placeholder="Confirm Password"
            name={"confirm"}
            type={"text"}
            value={confirm}
            onChange={this.onChange}
            icon={PasswordImage}
            alt={"Confirm Image"}
          ></TextBox>
          <Button onClick={this.handleSubmitForm}>Continue</Button>
          <span className="text-center">
            <span className="color-primary">Have An Account?</span> Click here!
          </span>
        </Card>
      </div>
    );
  }
}
export default RegisterPage;
