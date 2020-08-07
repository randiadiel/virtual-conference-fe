import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import ScheduleItem from "./ScheduleItem";
import API from "../../api/Api";

class SchedulePage extends Component {
  state = {
    schedules: [],
  };
  async componentDidMount() {
    const promise = await API.handleGet("/auth/seminars", true);
    this.setState({ schedules: promise.message });
  }
  render() {
    const { schedules } = this.state;
    var number = 0;
    return (
      <TitleCard title="Seminar Schedules">
        {schedules.map((e) => {
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
        })}
      </TitleCard>
    );
  }
}

export default SchedulePage;
