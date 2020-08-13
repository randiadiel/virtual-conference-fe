import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import UserCard from "./UserCard";
import Api from "../../api/Api";
import Loader from "../../components/Loader/Loader";

export default class UserPage extends Component {
  state = {
    user: [],
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
  render() {
    const { user } = this.state;
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
                  status="0"
                  binusian={true}
                  path={e.payment_id}
                  payment_id={e.payment_id}
                  onVerifyPayment={this.handleVerifyPayment}
                  onVerifyBinusian={this.handleVerifyBinusian}
                ></UserCard>
              ) : (
                <div key={e.id}></div>
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
