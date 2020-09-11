import React, { Component } from "react";
import css from "../../styles/index.scss";

class TextBox extends Component {
  render() {
    const {
      placeholder,
      onChange,
      value,
      name,
      type,
      icon,
      alt,
      autocomplete,
    } = this.props;
    return (
      <div className={`${css["text-box"]}`}>
        <img src={icon} alt={alt} />
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          autoComplete={autocomplete}
        />
      </div>
    );
  }
}

export default TextBox;
