import React, { Component } from "react";
import css from "../../styles/index.scss";

class Card extends Component {
  render() {
    return (
      <div className={`${css["card-custom"]} ${this.props.class}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
