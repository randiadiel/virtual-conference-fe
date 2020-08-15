import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import UserCard from "./UserCard";
import Api from "../../api/Api";
import Loader from "../../components/Loader/Loader";
import UpdateUser from "../UpdateUser/UpdateUser";

export default class UserPage extends Component {
  state = {
    user: [],
    edit: {
      id: null,
    },
  };
  async componentDidMount() {
    const promise = await Api.handleGet("/auth/admin", true);
    const user = promise.data;
    this.setState({ user });
  }
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
  render() {
    const { edit, user } = this.state;
    if (edit.id !== null) {
      return <UpdateUser></UpdateUser>;
    }
    return (
      <div className="user-page">
        <TitleCard title="User">
          {user.length > 0 ? (
            user.map((e) =>
              e.role_id !== 1 ? (
                <UserCard
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  payment={e.payment_id}
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
                  role={e.role_id}
                  path={e.payment_id !== null ? e.Payment.image : e.payment_id}
                  payment_id={e.payment_id}
                  onVerifyPayment={this.handleVerifyPayment}
                  onVerifyBinusian={this.handleVerifyBinusian}
                  onEditClick={this.handleEditUser}
                ></UserCard>
              ) : (
                <React.Fragment key={e.id}></React.Fragment>
              )
            )
          ) : (
            <Loader></Loader>
          )}
        </TitleCard>
      </div>
    );
  }
}
