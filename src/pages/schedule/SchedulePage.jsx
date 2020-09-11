import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import ScheduleItem from "./ScheduleItem";
import API from "../../api/Api";
import AuthServices from "../../auth/AuthServices";
import VerificationPayment from "../verification/VerificationPayment";
import Loader from "../../components/Loader/Loader";

import PdfGuidebook from "../../assets/Booklet_Virtual_Conference.pdf";
import { Redirect } from "react-router-dom";

class SchedulePage extends Component {
  state = {
    schedules: [],
    redirect: false,
  };
  async componentDidMount() {
    try {
      const promise = await API.handleGet("/auth/seminars", true);
      if (promise.status === 200) {
        this.setState({ schedules: promise.data });
      } else {
        this.setState({ redirect: true, error: promise.message });
      }
    } catch (e) {
      this.setState({
        redirect: true,
        error: `${e.response.statusText} / Session Timeout`,
      });
    }
  }
  componentWillUnmount() {}
  render() {
    const { schedules, redirect, error } = this.state;
    var number = 0;
    const user = AuthServices.getUserInfo().user;
    if (user.payment_id === null || user.Payment.status === 0) {
      return <VerificationPayment></VerificationPayment>;
    } else if (redirect === true) {
      return <Redirect to={`/login?${error}`}></Redirect>;
    }
    return (
      <TitleCard title="Seminar Schedules">
        <p className="text-light w-100">
          Before joining any seminars, please read our{" "}
          <a href={PdfGuidebook} target="_blank" rel="noopener noreferrer">
            participant guidelines
          </a>
          .
        </p>
        {schedules.length > 0 ? (
          schedules.map((e) => {
            number += 1;
            return (
              <ScheduleItem
                key={e.id}
                number={number}
                topic={e.title}
                time={`${e.schedule.date} ${e.schedule.time}`}
                link={e.link}
              ></ScheduleItem>
            );
          })
        ) : (
          <Loader></Loader>
        )}
      </TitleCard>
    );
  }
}

export default SchedulePage;
