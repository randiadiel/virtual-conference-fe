import React from "react";
import css from "../../styles/index.scss";

export default function Loader() {
  return (
    <div
      className={`${css["spinner-grow"]} ${css["text-light"]}`}
      role="status"
    >
      <span className={`${css["sr-only"]}`}>Loading...</span>
    </div>
  );
}
