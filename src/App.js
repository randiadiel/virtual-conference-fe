import React from "react";
import TextBox from "./components/TextBox";

const App = () => {
  return (
    <div>
      <TextBox type="text" placeholder="Name"></TextBox>
      <TextBox type="text" placeholder="Name" onFormSubmit={handleFormSubmit}></TextBox>
    </div>
  );
};

export default App;
