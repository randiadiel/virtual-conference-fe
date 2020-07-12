import React, { Component } from "react";

class TextBox extends Component {

  render() {
    const {placeholder, onChange, value,name,type, icon, alt } = this.props;
    return (
      <div className="text-box">
        <img src={icon} alt={alt} />
        <input
          type= {type}
          placeholder={placeholder}
          onChange = {onChange}
          value={value}
          name={name}
        />
      </div>
    );
  }
}

export default TextBox;
