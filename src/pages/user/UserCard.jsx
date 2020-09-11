import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import UserEdit from "./UserEdit";
import css from "../../styles/index.scss";

class UserCard extends Component {
  state = {
    onEdit: null,
    editAlert: null,
  };
  onEditClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    this.setState({ onEdit: id });
  };
  onCancelEdit = (e) => {
    e.preventDefault();
    this.setState({ onEdit: null });
  };
  doneEdit = () => {
    this.setState({ onEdit: null, editAlert: "Edited Successfully" });
    setTimeout(() => {
      this.setState({ editAlert: null });
    }, 5000);
  };
  onVerifyBinusianPrompt = (e) => {
    this.setState({ verifyB: e.target.id });
  };
  render() {
    const { onEdit, editAlert, verifyB } = this.state;
    const {
      id,
      name,
      status,
      path,
      binusian,
      flazz,
      onVerifyPayment,
      onVerifyBinusian,
      payment_id,
      role,
      verify,
      onCancelPayment,
      onVerifyClick,
      user,
      reloadUser,
    } = this.props;
    return (
      <div className={`${css["user-card"]}`}>
        <ReactTooltip></ReactTooltip>
        <h2>{name}</h2>
        <p>Payment Status : {status === false ? "Unverified" : "Verified"}</p>
        {payment_id !== null ? (
          <React.Fragment>
            <div>
              <a
                className={`${css["badge"]} ${css["badge-primary"]} ${css["mb-3"]}`}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                data-tip={`<img src="${path}" style="width: 300px"/>`}
                data-html={true}
              >
                View Payment
              </a>
            </div>
            {status === false ? (
              verify === id.toString() ? (
                <div>
                  <h6>Udah yakin mo diverif?</h6>
                  <button
                    id={id}
                    onClick={onVerifyPayment}
                    className={`${css["btn"]} ${css["btn-primary"]} ${css["mr-2"]}`}
                  >
                    Verify
                  </button>
                  <button
                    onClick={onCancelPayment}
                    className={`${css["btn"]} ${css["btn-danger"]}`}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className={`${css["btn"]} ${css["btn-warning"]}`}
                  onClick={onVerifyClick}
                  id={id}
                >
                  Verify Payment
                </button>
              )
            ) : (
              <span></span>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <hr />
        {binusian === true ? (
          <React.Fragment>
            <div>
              <a
                className={`${css["badge"]} ${css["badge-primary"]} ${css["mb-3"]} ${css["mr-3"]}`}
                href={flazz}
                target="_blank"
                rel="noopener noreferrer"
                data-tip={`<img src="${flazz}" style="width: 300px"/>`}
                data-html={true}
              >
                View Flazz
              </a>
            </div>
            {verifyB === id.toString() ? (
              <div>
                <h6>Udah yakin mo diverif?</h6>
                <button
                  id={id}
                  onClick={onVerifyBinusian}
                  className={`${css["btn"]} ${css["btn-primary"]} ${css["mr-2"]}`}
                >
                  Verify
                </button>
                <button
                  onClick={() => this.setState({ verifyB: false })}
                  className={`${css["btn"]} ${css["btn-danger"]}`}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className={`${css["btn"]} ${css["btn-warning"]}`}
                onClick={this.onVerifyBinusianPrompt}
                id={id}
              >
                Verify Binusian
              </button>
            )}
          </React.Fragment>
        ) : (
          <span>
            {role === 3 ? (
              <React.Fragment>
                <div>
                  <a
                    className={`${css["badge"]} ${css["badge-primary"]} ${css["mb-3"]}`}
                    href={flazz}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip={`<img src="${flazz}" style="width: 300px"/>`}
                    data-html={true}
                  >
                    View Flazz
                  </a>
                </div>

                <p className={`${css["badge"]} ${css["badge-success"]}`}>
                  Verified as Binusian
                </p>
              </React.Fragment>
            ) : (
              <p className={`${css["badge"]} ${css["badge-danger"]}`}>
                Not A Binusian
              </p>
            )}
          </span>
        )}
        <hr />
        {editAlert != null && (
          <div class={`${css["alert"]} ${css["alert-success"]}`} role="alert">
            {editAlert}
          </div>
        )}
        <button
          id={id}
          className={`${css["btn"]} ${css["btn-warning"]}`}
          onClick={onEdit == null ? this.onEditClick : this.onCancelEdit}
        >
          {onEdit != null ? "Cancel Edit" : "Edit"}
        </button>
        {onEdit != null && (
          <UserEdit
            doneEdit={this.doneEdit}
            reloadUser={reloadUser}
            user={user}
          ></UserEdit>
        )}
      </div>
    );
  }
}

export default UserCard;
