import React from "react";
import Card from "../../components/Card/Index";
import Logo from "../../assets/Logo/logo-technoscape-virtualcon.png";
import Dots from "../../assets/LoginPage/login-bg-dots.png";

export default function RegisterEnd() {
  return (
    <div
      className={
        "register-end register-page d-flex justify-content-center align-items-center flex-column container-fluid"
      }
    >
      <img className="login-page-dots" src={Dots} alt="Dots Background" />
      <a href="https://virtualconference.bncc.net/" style={{ zIndex: 10 }}>
        <img className="login-page-logo" src={Logo} alt="Logo" />
      </a>
      <span>Acquire Technology Insight to Build Your Remarkable Career</span>
      <Card class={"login-page-card d-flex flex-column mb-5"}>
        <h2 className={"text-center mb-3"}>Registration</h2>
        <p className="text-justify">
          Hello, Thankyou for your interest on Technoscape Virtual Conference.
          Unfortunately, the registration period has ended. Please kindly check
          our next upcoming event below or you can check our social media on
          instagram (
          <a href="https://www.instagram.com/technoscapebncc">
            @technoscapebncc
          </a>
          )
        </p>
        <div className="register-end-logo">
          <a href="https://hackathon.bncc.net/">
            <img
              className="register-end-logo-hackathon"
              src="https://hackathon.bncc.net/assets/img/Hackathon-logo.png"
              alt="technoscape-bncc-hackathon"
            />
          </a>
          <a href="https://technoscape.bncc.net/">
            <img
              className="register-end-logo-technoscape"
              src="https://technoscape.bncc.net/technoscape_logo.7c74764e0992a24c3a4debc21a829a8d.png"
              alt="technoscape-bncc-hackathon"
            />
          </a>
        </div>
        <a
          href="https://virtualconference.bncc.net/"
          className="d-block text-center mt-4"
        >
          Back to Virtual Conference site
        </a>
      </Card>
    </div>
  );
}
