import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import EmailImage from "../../assets/LoginIcon/login-email.svg";
import PasswordImage from "../../assets/LoginIcon/icon-password.png";
import NameImage from "../../assets/LoginIcon/icon-name.svg";
import Whatsapp from "../../assets/LoginIcon/icon-whatsapp.svg";
import Confirm from "../../assets/LoginIcon/icon-confirm.svg";
import Line from "../../assets/LoginIcon/icon-line.svg";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";
import Dots from "../../assets/LoginPage/login-bg-dots.png";
import TextBox from "../../components/TextBox/TextBox";
import Card from "../../components/Card/Index";
import Button from "../../components/Button/Button";
import FileUpload from "../../components/FileUpload/FileUpload";
import Api from "../../api/Api";
import Loader from "../../components/Loader/Loader";

class RegisterPage extends Component {
  state = {
    name: "",
    phone: "",
    lineid: "",
    email: "",
    password: "",
    confirm: "",
    role: false,
    flazz: "",
    success: false,
    confirmStatus: null,
    loader: false,
    errors: {
      email: null,
      phone: null,
      lineid: null,
      name: null,
      password: null,
      flazz: null,
    },
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  componentDidMount() {}

  onChange = (e) => {
    const target = e.target;
    if (target.value !== this.state.password) {
      if (target.name === "confirm" || target.name === "password") {
        this.setState({ confirmStatus: "Password Didn't Match" });
      }
    } else {
      this.setState({ confirmStatus: null });
    }
    this.setState({ [target.name]: target.value });
  };

  onFileUploadChange = (e) => {
    this.setState({ flazz: this.fileInput.current.files[0] });
  };

  handleCheckChange = (e) => {
    const target = e.target;
    this.setState({ role: target.checked });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    const {
      name,
      phone,
      lineid,
      email,
      password,
      confirm,
      role,
      flazz,
    } = this.state;
    if (confirm !== password) {
      this.setState({ confirmStatus: "Password Didn't Match" });
    } else {
      let form_data = new FormData();
      form_data.append("name", name);
      form_data.append("phone", phone);
      form_data.append("lineid", lineid);
      form_data.append("email", email);
      form_data.append("password", password);
      form_data.append("role", role);
      if (role === true) {
        form_data.append("flazz", flazz, flazz.name);
      }
      const promise = await Api.handleFormDataPost(
        "/auth/register",
        form_data,
        false
      );
      const { status, errors } = await promise;
      if (status === 200) {
        this.setState({ success: true });
      } else if (errors != null) {
        this.setState({ errors, loader: false });
      }
    }
  };

  render() {
    const {
      name,
      phone,
      lineid,
      email,
      password,
      confirm,
      role,
      flazz,
      success,
      errors,
      confirmStatus,
      loader,
    } = this.state;
    if (success === true) return <Redirect to="/login"></Redirect>;
    return (
      <div
        className={
          "register-page d-flex justify-content-center align-items-center flex-column container-fluid"
        }
      >
        <img className="login-page-dots" src={Dots} alt="Dots Background" />
        <img className="login-page-logo mt-5" src={Logo} alt="Logo" />
        <span>Acquire Technology Insight to Build Your Remarkable Career</span>
        <Card class={"login-page-card d-flex flex-column mb-5"}>
          <h2 className={"text-center mb-3"}>Registration</h2>
          <form onSubmit={this.handleSubmitForm}>
            <TextBox
              placeholder="Full Name"
              name={"name"}
              value={name}
              type={"text"}
              onChange={this.onChange}
              icon={NameImage}
              alt={"Name Image"}
            ></TextBox>
            {errors.name != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.name}
              </h6>
            )}
            <TextBox
              placeholder="Whatsapp Number"
              name={"phone"}
              type={"text"}
              value={phone}
              onChange={this.onChange}
              icon={Whatsapp}
              alt={"Phone Image"}
            ></TextBox>
            {errors.phone != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.phone}
              </h6>
            )}
            <TextBox
              placeholder="Line ID"
              name={"lineid"}
              type={"text"}
              value={lineid}
              onChange={this.onChange}
              icon={Line}
              alt={"Line Image"}
            ></TextBox>
            {errors.lineid != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.lineid}
              </h6>
            )}
            <TextBox
              placeholder="Email"
              name={"email"}
              type={"email"}
              value={email}
              onChange={this.onChange}
              icon={EmailImage}
              alt={"Email Image"}
            ></TextBox>
            {errors.email != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.email}
              </h6>
            )}
            <TextBox
              placeholder="Password"
              name={"password"}
              type={"password"}
              value={password}
              onChange={this.onChange}
              icon={PasswordImage}
              alt={"Password Image"}
            ></TextBox>
            {errors.password != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.password}
              </h6>
            )}
            <TextBox
              placeholder="Confirm Password"
              name={"confirm"}
              type={"password"}
              value={confirm}
              onChange={this.onChange}
              icon={Confirm}
              alt={"Confirm Image"}
            ></TextBox>
            {confirmStatus != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {confirmStatus}
              </h6>
            )}
            <h6 className="mt-1">Are You Binusian ?</h6>
            <div>
              <input
                className="mr-1"
                id="binusian"
                type="checkbox"
                onChange={this.handleCheckChange}
              />
              <label htmlFor="binusian">Yes</label>
            </div>

            {role === true ? (
              <div>
                <h6 htmlFor="upload">Please Upload Your Binusian Flazz</h6>
                <div>
                  <FileUpload
                    onChange={this.onFileUploadChange}
                    reference={this.fileInput}
                    label={flazz.name}
                    id="flazz"
                  ></FileUpload>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {errors.flazz != null && (
              <h6 className="text-danger text-left w-100 px-3 m-0">
                {errors.flazz}
              </h6>
            )}
            {loader === true ? (
              <Loader></Loader>
            ) : (
              <Button onClick={this.handleSubmitForm}>Continue</Button>
            )}
            <input style={{ display: "none" }} type="submit" />
          </form>
          <span className="text-center">
            <span className="color-primary">Have An Account?</span>{" "}
            <Link to="/login">Click here!</Link>
          </span>
        </Card>
      </div>
    );
  }
}
export default RegisterPage;
