import React, { Component } from "react";

class TextBox extends Component {
  state = {
    color: "red",
    value: "",
  };

  componentDidMount() {
      axios.get();
      
  }

  handleFormSubmit = (e) => {};

  render() {
    const { type, placeholder } = this.props;
    const { value } = this.state;
    return (
      <div className="text-box">
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => this.setState({ value: e.value })}
          value={value}
        />
      </div>
    );
  }
}

export default TextBox;
