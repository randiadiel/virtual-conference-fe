import React from "react";

export default function TitleCard(props) {
  const { children, title } = props;
  return (
    <div className="title-card">
      <h1>{title}</h1>
      <hr />
      <div>{children}</div>
    </div>
  );
}
