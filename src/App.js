import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import TextBox from "./components/TextBox/TextBox";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TextBox}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
