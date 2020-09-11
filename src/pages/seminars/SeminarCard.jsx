import React, { Component } from "react";
import css from "../../styles/index.scss";

import ReactTooltip from "react-tooltip";
import SeminarEdit from "./SeminarEdit";

class SeminarCard extends Component {
  state = {
    edit: false,
  };

  handleEdit = (e) => {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  };
  doneEdit = () => {
    this.setState({ edit: false });
    this.props.doneEdit();
  };
  render() {
    const { edit } = this.state;
    const { seminar } = this.props;
    return (
      <div className={`${css["seminar-card"]}`} key={seminar.id}>
        <h3 className={`${css["seminar-card-title"]}`}>{seminar.title}</h3>
        <div className={`${css["text-light"]}`}>
          <h5>{seminar.speaker}</h5>
          <h5>
            {seminar.schedule.date}&nbsp;{seminar.schedule.time}
          </h5>
          <ReactTooltip></ReactTooltip>
          <a
            href={seminar.link}
            className={`${css["badge"]} ${css["badge-primary"]} ${css["mb-3"]}`}
            data-tip={seminar.link}
            data-type="light"
          >
            Click Here To Join
          </a>
        </div>
        <button
          className={`${css["btn"]} ${
            css[`btn-${edit === true ? "danger" : "warning"}`]
          }`}
          onClick={this.handleEdit}
        >
          {edit === true ? "Cancel Edit" : "Edit"}
        </button>
        {edit === true && (
          <SeminarEdit doneEdit={this.doneEdit} seminar={seminar}></SeminarEdit>
        )}
      </div>
    );
  }
}

export default SeminarCard;
