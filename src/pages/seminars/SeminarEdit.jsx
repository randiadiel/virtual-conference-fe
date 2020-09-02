import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import Api from "../../api/Api";

class SeminarEdit extends Component {
  constructor(props) {
    super(props);
    const { title, schedule, speaker, link, id } = this.props.seminar;
    const { date, time } = schedule;
    this.state = {
      title,
      date,
      time,
      speaker,
      link,
      id,
      errors: null,
    };
  }
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    const { title, date, time, speaker, link, id } = this.state;
    let form_data = new FormData();
    form_data.append("title", title);
    form_data.append("speaker", speaker);
    form_data.append("link", link);
    form_data.append("date", date);
    form_data.append("time", time);
    const promise = await Api.handleFormDataPost(
      `/auth/seminar/${id}`,
      form_data,
      true
    );
    if (promise.errors != null) {
      this.setState({ errors: promise.errors, loader: false });
    } else {
      this.props.doneEdit();
    }
  };
  render() {
    const { title, date, time, speaker, link, loader, errors } = this.state;
    return (
      <div className="seminar-edit">
        {errors != null && (
          <div className="alert alert-danger mt-2">
            <ul className="m-0">
              {Object.values(errors).map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        )}
        <form className="text-light mt-3" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label for="seminarTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="seminarTitle"
              value={title}
              name="title"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="seminarSpeaker">Speaker</label>
            <input
              type="text"
              className="form-control"
              id="seminarSpeaker"
              value={speaker}
              name="speaker"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="seminarDate">Date</label>
            <input
              type="text"
              className="form-control"
              id="seminarDate"
              value={date}
              name="date"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="seminarTime">Time</label>
            <input
              type="text"
              className="form-control"
              id="seminarTime"
              value={time}
              name="time"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="seminarLink">Link</label>
            <input
              type="text"
              className="form-control"
              id="seminarLink"
              value={link}
              name="link"
              onChange={this.onChange}
            />
          </div>
          {loader === true ? (
            <Loader></Loader>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </form>
      </div>
    );
  }
}
export default SeminarEdit;
