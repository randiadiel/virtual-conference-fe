import React, { Component } from "react";

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
      <div className="seminar-card" key={seminar.id}>
        <h3 className="seminar-card-title">{seminar.title}</h3>
        <div className="text-light">
          <h5>{seminar.speaker}</h5>
          <h5>
            {seminar.schedule.date}&nbsp;{seminar.schedule.time}
          </h5>
          <ReactTooltip></ReactTooltip>
          <a
            href={seminar.link}
            className="badge badge-primary mb-3"
            data-tip={seminar.link}
            data-type="light"
          >
            Click Here To Join
          </a>
        </div>
        <button
          className={`btn btn-${edit === true ? "danger" : "warning"}`}
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
