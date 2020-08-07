import React, { Component } from "react";
import Card from "../../components/Card/Index";

class ScheduleItem extends Component {
  render() {
    const { topic, time, link, number } = this.props;
    return (
      <div className="schedule-item">
        <Card class="schedule-item-number">{number}.</Card>
        <Card class="schedule-item-content">
          <div>
            <span className="title">Topic</span>
            <span className="title">Time</span>
            <span className="title">Link</span>
          </div>
          <div>
            <span className="description">{topic}</span>
            <span className="description">{time}</span>
            <a href={link} className="description">
              {link}
            </a>
          </div>
        </Card>
      </div>
    );
  }
}

export default ScheduleItem;
