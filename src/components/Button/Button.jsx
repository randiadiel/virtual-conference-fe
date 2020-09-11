import React, { Component } from "react";
import css from "../../styles/index.scss";

class Button extends Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <div className={`${css["button"]}`}>
        <input type="button" value={children} onClick={onClick} />
      </div>
    );
  }
}

export default Button;
