import React, { Component } from "react";
import Api from "../../api/Api";
import Loader from "../../components/Loader/Loader";

export default class UserEdit extends Component {
  constructor(props) {
    super(props);
    const { name, email, phone, lineid, role_id } = this.props.user;
    if (role_id === 3) {
      const { NIM, jurusan } = this.props.user.Binusian;
      this.state = {
        NIM,
        jurusan,
        name,
        email,
        phone,
        lineid,
        role_id,
        loader: false,
      };
    } else {
      this.state = { name, email, phone, lineid, role_id, loader: false };
    }
  }
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    const id = e.target.id;
    const { name, phone, lineid, email, role_id, NIM, jurusan } = this.state;
    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("phone", phone);
    form_data.append("lineid", lineid);
    form_data.append("email", email);
    if (role_id === 3 && NIM !== null) {
      form_data.append("NIM", NIM);
      form_data.append("jurusan", jurusan);
    }
    await Api.handleFormDataPost(`/auth/admin/${id}`, form_data, true);
    this.props.reloadUser();
    this.props.doneEdit();
  };
  render() {
    const {
      name,
      email,
      phone,
      lineid,
      role_id,
      NIM,
      jurusan,
      loader,
    } = this.state;
    return (
      <div>
        <form id={this.props.user.id} onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="nameEdit">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameEdit"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailEdit">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailEdit"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lineidEdit">Line</label>
            <input
              type="text"
              className="form-control"
              id="lineidEdit"
              name="lineid"
              value={lineid}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneEdit">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phoneEdit"
              name="phone"
              value={phone}
              onChange={this.onChange}
            />
          </div>
          {role_id === 3 && NIM !== null && (
            <React.Fragment>
              <div className="form-group">
                <label htmlFor="nimEdit">NIM</label>
                <input
                  type="text"
                  className="form-control"
                  id="nimEdit"
                  name="NIM"
                  value={NIM}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jurusanEdit">Jurusan</label>
                <input
                  type="text"
                  className="form-control"
                  id="jurusanEdit"
                  name="jurusan"
                  value={jurusan}
                  onChange={this.onChange}
                />
              </div>
            </React.Fragment>
          )}
          {loader === false ? (
            <input
              className="btn btn-warning"
              type="submit"
              value="Confirm"
            ></input>
          ) : (
            <Loader></Loader>
          )}
        </form>
      </div>
    );
  }
}
