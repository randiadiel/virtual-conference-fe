import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import ScheduleItem from "./ScheduleItem";

class SchedulePage extends Component {
  state = {
    schedules: [
      {
        id: "1",
        topic: "Halo",
        time: "23 Januari 2020",
        link: "meet.google.com/hahahaha",
      },
      {
        id: "2",
        topic: "Halo 2",
        time: "24 Januari 2020",
        link: "meet.google.com/sssssss",
      },
      {
        id: "3",
        topic: "Halo aja",
        time: "25 Januari 2020",
        link: "meet.google.com/ssssasasss",
      },
      {
        id: "4",
        topic: "Halo aja",
        time: "25 Januari 2020",
        link: "meet.google.com/ssssasasss",
      },
    ],
  };
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
              topic={e.topic}
              time={e.time}
              link={e.link}
            ></ScheduleItem>
          );
        })}
      </TitleCard>
    );
  }
}

export default SchedulePage;
