import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import UserCard from "./UserCard";
import Api from "../../api/Api";
import Loader from "../../components/Loader/Loader";
import UpdateUser from "../UpdateUser/UpdateUser";

import Sad from "../../assets/Vector/sad.svg";

export default class UserPage extends Component {
  state = {
    user: [],
    edit: {
      id: null,
    },
    verify: null,
    searchQuery: "",
    bFilter: false,
    pFilter: false,
    vFilter: false,
    vbFilter: false,
  };
  async componentDidMount() {
    const promise = await Api.handleGet("/auth/admin", true);
    const user = promise.data;
    this.setState({ user });
  }
  reloadUser = async () => {
    const promise = await Api.handleGet("/auth/admin", true);
    const user = promise.data;
    this.setState({ user });
  };
  cancelPayment = () => {
    this.setState({ verify: null });
  };
  verifyPaymentClick = (e) => {
    e.preventDefault();
    const verify = e.target.id.trim();
    this.setState({ verify });
  };
  handleVerifyPayment = async (e) => {
    e.preventDefault();
    await Api.handlePost(
      `/auth/payment_verified/${e.target.id.trim()}`,
      {},
      true
    );
    const promise = await Api.handleGet("/auth/admin", true);
    const user = promise.data;
    this.setState({ user });
  };
  handleVerifyBinusian = async (e) => {
    e.preventDefault();
    await Api.handlePost(`/auth/verified/${e.target.id.trim()}`, {}, true);
    const promise = await Api.handleGet("/auth/admin", true);
    const user = promise.data;
    this.setState({ user });
  };
  handleEditUser = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    for (var i = 0; i < user.length; i++) {
      if (user[i].id.toString() === e.target.id) break;
    }
    this.setState({ edit: user[i] });
  };
  handleSearchBarChange = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    this.setState({ searchQuery });
  };
  binusianFilterClick = () => {
    if (this.state.vbFilter === false) {
      const { bFilter } = this.state;
      this.setState({ bFilter: !bFilter });
    }
  };
  paymentFilterClick = () => {
    if (this.state.vFilter === false) {
      const { pFilter } = this.state;
      this.setState({ pFilter: !pFilter });
    }
  };
  verifiedFilterClick = () => {
    if (this.state.pFilter === false) {
      const { vFilter } = this.state;
      this.setState({ vFilter: !vFilter });
    }
  };
  vBinusianFilterClick = () => {
    if (this.state.bFilter === false) {
      const { vbFilter } = this.state;
      this.setState({ vbFilter: !vbFilter });
    }
  };
  render() {
    const {
      edit,
      user,
      searchQuery,
      bFilter,
      pFilter,
      vFilter,
      vbFilter,
    } = this.state;
    let filteredUser = null;
    if (edit.id !== null) {
      return <UpdateUser></UpdateUser>;
    }
    if (user.length > 0) {
      filteredUser = user.filter((u) => {
        if (
          u.name
            .toString()
            .toLowerCase()
            .match(new RegExp(searchQuery.toLowerCase(), "g")) ||
          u.phone
            .toString()
            .toLowerCase()
            .match(new RegExp(searchQuery.toLowerCase(), "g")) ||
          u.email
            .toString()
            .toLowerCase()
            .match(new RegExp(searchQuery.toLowerCase(), "g")) ||
          u.lineid
            .toString()
            .toLowerCase()
            .match(new RegExp(searchQuery.toLowerCase(), "g"))
        ) {
          return u;
        } else if (
          (u.Binusian != null &&
            u.Binusian.NIM != null &&
            u.Binusian.NIM.toString()
              .toLowerCase()
              .match(new RegExp(searchQuery.toLowerCase(), "g"))) ||
          (u.Binusian.jurusan != null &&
            u.Binusian.jurusan
              .toString()
              .toLowerCase()
              .match(new RegExp(searchQuery.toLowerCase(), "g")))
        ) {
          return u;
        }
      });
      if (bFilter === true) {
        filteredUser = filteredUser.filter(
          (u) => u.role_id === 2 && u.Binusian.flazz != null && u
        );
      }
      if (pFilter === true) {
        filteredUser = filteredUser.filter(
          (u) => u.Payment != null && u.Payment.status === 0 && u
        );
      }
      if (vFilter === true) {
        filteredUser = filteredUser.filter(
          (u) => u.Payment != null && u.Payment.status === 1 && u
        );
      }
      if (vbFilter === true) {
        filteredUser = filteredUser.filter((u) => u.role_id === 3 && u);
      }
    }
    return (
      <div className="user-page">
        <span className="text-light mr-2 badge badge-light text-dark">
          Total Participant: {user.length === 0 ? 0 : user.length - 1}
        </span>
        <span className="text-light mr-2 badge badge-light text-dark">
          Total Verified Binusians:{" "}
          {user.filter((e) => e.role_id === 3 && e).length}
        </span>
        <span className="text-light mr-2 badge badge-light text-dark">
          Total Verified Payment:{" "}
          {
            user.filter(
              (e) =>
                e.payment_id == null &&
                e.Payment != null &&
                e.Payment.status === 1 &&
                e
            ).length
          }
        </span>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="searchBar" className="text-light mb-0 mt-1">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="searchBar"
              aria-describedby="searchBarHelp"
              onChange={this.handleSearchBarChange}
              placeholder="ex. Edbert Junus"
              value={searchQuery}
            />
            <small id="searchBarHelp" className="form-text text-light">
              You can search participant's name, email, phone, NIM, lineid, and
              jurusan here
            </small>
          </div>
        </form>
        <button
          className={`btn btn-${
            bFilter === true ? "success" : "secondary"
          } mr-2`}
          onClick={this.binusianFilterClick}
          disabled={vbFilter === true && true}
        >
          Haven't Verified Binusian
        </button>
        <button
          className={`btn btn-${
            pFilter === true ? "success" : "secondary"
          } mr-2`}
          onClick={this.paymentFilterClick}
          disabled={(vFilter === true || bFilter === true) && true}
        >
          Haven't Verified Payment
        </button>
        <button
          className={`btn btn-${
            vbFilter === true ? "success" : "secondary"
          } mr-2`}
          onClick={this.vBinusianFilterClick}
          disabled={bFilter === true && true}
        >
          Verified Binusian
        </button>
        <button
          className={`btn btn-${
            vFilter === true ? "success" : "secondary"
          } mr-2`}
          onClick={this.verifiedFilterClick}
          disabled={(pFilter === true || bFilter === true) && true}
        >
          Verified Payment
        </button>

        <TitleCard title="Participants List">
          {user.length > 0 ? (
            filteredUser.map((e) =>
              e.role_id !== 1 ? (
                <UserCard
                  user={e}
                  reloadUser={this.reloadUser}
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  status={
                    e.payment_id === null
                      ? false
                      : e.Payment.status === 0
                      ? false
                      : true
                  }
                  binusian={
                    e.Binusian.flazz !== null && e.role_id !== 3 ? true : false
                  }
                  flazz={e.Binusian.flazz}
                  role={e.role_id}
                  path={e.payment_id !== null ? e.Payment.image : e.payment_id}
                  payment_id={e.payment_id}
                  onVerifyPayment={this.handleVerifyPayment}
                  onVerifyBinusian={this.handleVerifyBinusian}
                  onEditClick={this.handleEditUser}
                  verify={this.state.verify}
                  onVerifyClick={this.verifyPaymentClick}
                  onCancelPayment={this.cancelPayment}
                ></UserCard>
              ) : (
                <React.Fragment key={e.id}></React.Fragment>
              )
            )
          ) : (
            <Loader></Loader>
          )}
          {filteredUser != null && filteredUser.length === 0 && (
            <React.Fragment>
              <div>
                <img src={Sad} style={{ width: "200px" }}></img>
                <h5 className="text-light text-center text-bold">
                  <b>No Match</b>
                </h5>
              </div>
            </React.Fragment>
          )}
        </TitleCard>
      </div>
    );
  }
}
