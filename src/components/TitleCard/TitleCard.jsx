import React from "react";
import css from "../../styles/index.scss";

export default function TitleCard(props) {
  const { children, title } = props;
  return (
    <div className={`${css["title-card"]}`}>
      <h1>{title}</h1>
      <hr />
      <div className={`${css["title-card-container"]}`}>{children}</div>
    </div>
  );
}
