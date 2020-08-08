import React, { Component } from "react";

class FileUpload extends Component {
  render() {
    const { onChange, reference, label } = this.props;
    return (
      <div className="file-upload custom-file">
        <input
          className="custom-file-input"
          type="file"
          name="image"
          id="payment_image"
          accept="image/png, image/jpeg"
          onChange={onChange}
          ref={reference}
        />
        <label
          className="custom-file-label"
          htmlFor="customFile"
          aria-describedby="inputGroupFileAddon02"
        >
          {label}
        </label>
      </div>
    );
  }
}

export default FileUpload;
