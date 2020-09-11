import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Card from "../../components/Card/Index";
import css from "../../styles/index.scss";

class ScheduleItem extends Component {
  render() {
    const { topic, time, link, number } = this.props;
    return (
      <div className={`${css["schedule-item"]}`}>
        <ReactTooltip></ReactTooltip>
        <Card class={`${css["schedule-item-number"]}`}>{number}.</Card>
        <Card class={`${css["schedule-item-content"]}`}>
          <table>
            <tbody>
              <tr>
                <td className={`${css["title"]} ${css["pr-2"]}`}>Topic</td>
                <td className={`${css["description"]}`}>{topic}</td>
              </tr>
              <tr>
                <td className={`${css["title"]} ${css["pr-2"]}`}>Time</td>
                <td className={`${css["description"]}`}>{time}</td>
              </tr>
              <tr>
                <td className={`${css["title"]} ${css["pr-2"]}`}>Link</td>
                <td>
                  <a
                    href={link}
                    className={`${css["description"]}`}
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
