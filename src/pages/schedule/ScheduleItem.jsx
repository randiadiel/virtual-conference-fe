import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Card from "../../components/Card/Index";

class ScheduleItem extends Component {
  render() {
    const { topic, time, link, number } = this.props;
    return (
      <div className="schedule-item">
        <ReactTooltip></ReactTooltip>
        <Card class="schedule-item-number">{number}.</Card>
        <Card class="schedule-item-content">
          <table>
            <tbody>
              <tr>
                <td className="title pr-2">Topic</td>
                <td className="description">{topic}</td>
              </tr>
              <tr>
                <td className="title pr-2">Time</td>
                <td className="description">{time}</td>
              </tr>
              <tr>
                <td className="title pr-2">Link</td>
                <td>
                  <a
                    href={link}
                    className="description"
                    data-tip={link}
                    data-type="light"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

export default ScheduleItem;
