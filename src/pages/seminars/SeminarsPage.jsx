import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import SeminarCard from "./SeminarCard";
import Loader from "../../components/Loader/Loader";
import API from "../../api/Api";

class SeminarsPage extends Component {
  state = {
    seminars: null,
  };
  async componentDidMount() {
    const promise = await API.handleGet("/auth/admin/seminars", true);
    this.setState({ seminars: promise.data });
  }
  doneEdit = async () => {
    const promise = await API.handleGet("/auth/admin/seminars", true);
    this.setState({ seminars: promise.data });
  };
  render() {
    const { seminars } = this.state;
    return (
      <div className="seminars-page">
        <TitleCard title="Seminars">
          <React.Fragment>
            {seminars != null ? (
              seminars.map((e) => (
                <SeminarCard doneEdit={this.doneEdit} seminar={e}></SeminarCard>
              ))
            ) : (
              <Loader></Loader>
            )}
          </React.Fragment>
        </TitleCard>
      </div>
    );
  }
}

export default SeminarsPage;
