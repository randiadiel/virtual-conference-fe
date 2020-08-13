import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import ScheduleItem from "./ScheduleItem";
import API from "../../api/Api";
import AuthServices from "../../auth/AuthServices";
import VerificationPayment from "../verification/VerificationPayment";
import Loader from "../../components/Loader/Loader";

class SchedulePage extends Component {
  state = {
    schedules: [],
  };
  async componentDidMount() {
    const promise = await API.handleGet("/auth/seminars", true);
    this.setState({ schedules: promise.data });
  }
  render() {
    const { schedules } = this.state;
    var number = 0;
    const user = AuthServices.getUserInfo().user;
    console.log(user);
    if (user.payment_id === null || user.Payment.status === 0) {
      return <VerificationPayment></VerificationPayment>;
    }
    return (
      <TitleCard title="Seminar Schedules">
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
