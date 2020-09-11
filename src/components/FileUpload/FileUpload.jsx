import React, { Component } from "react";
import css from "../../styles/index.scss";

class FileUpload extends Component {
  render() {
    const { onChange, reference, label, id } = this.props;
    return (
      <div className={`${css["file-upload"]} ${css["custom-file"]}`}>
        <input
          className={`${css["custom-file-input"]}`}
          type="file"
          name="image"
          id={id}
          accept="image/png, image/jpeg"
          onChange={onChange}
          ref={reference}
        />
        <label
          className={`${css["custom-file-label"]}`}
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
